import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ChatInbox = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'John Doe', message: 'Hey, how are you?', time: '2:45 PM', image: 'https://via.placeholder.com/40', unread: true },
    { id: 2, name: 'Jane Smith', message: 'Meeting tomorrow at 10 AM.', time: '1:30 PM', image: 'https://via.placeholder.com/40', unread: false },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSend = () => {
    if (newMessage !== '') {
      const newConversation = {
        id: conversations.length + 1,
        name: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString(),
        image: 'https://via.placeholder.com/40',
        unread: false,
      };
      setConversations([...conversations, newConversation]);
      setNewMessage('');
    }
  };

  const handleDelete = (id) => {
    setConversations(conversations.filter((conversation) => conversation.id !== id));
    if (selectedConversation && selectedConversation.id === id) {
      setSelectedConversation(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.icon}>➕</Text>
        </View>
      </View>
      <ScrollView style={styles.conversationList}>
        {conversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            style={styles.conversationItem}
            onPress={() => setSelectedConversation(conversation)}
          >
            <Image
              source={{ uri: conversation.image }}
              style={styles.profilePicture}
            />
            <View style={styles.conversationDetails}>
              <Text style={styles.contactName}>{conversation.name}</Text>
              <Text style={styles.lastMessage}>{conversation.message}</Text>
            </View>
            <Text style={styles.timestamp}>{conversation.time}</Text>
            {conversation.unread && <Text style={styles.unreadIndicator}>•</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedConversation && (
        <View style={styles.chatHead}>
          <Image
            source={{ uri: selectedConversation.image }}
            style={styles.profilePicture}
          />
          <View style={styles.chatHeadDetails}>
            <Text style={styles.contactName}>{selectedConversation.name}</Text>
            <Text style={styles.lastMessage}>{selectedConversation.message}</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(selectedConversation.id)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottomNavigation}>
        <Text style={styles.navItem}>🏠</Text>
        <Text style={[styles.navItem, styles.activeNavItem]}>💬</Text>
        <Text style={styles.navItem}>📊</Text>
        <Text style={styles.navItem}>⚙</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={newMessage}
        onChangeText={(text) => setNewMessage(text)}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:
    1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginLeft: 20,
  },
  conversationList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  conversationDetails: {
    flex: 1,
    marginLeft: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#888',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  unreadIndicator: {
    fontSize: 20,
    color: '#f00',
  },
  chatHead: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  chatHeadDetails: {
    flex: 1,
    marginLeft: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    fontSize: 24,
    color: '#888',
  },
  activeNavItem: {
    color: '#000',
  },
  input: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f8f8f8',
  },
  sendButton: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatInbox;
