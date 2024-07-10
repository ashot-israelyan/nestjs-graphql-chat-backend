import Stack from '@mui/material/Stack';
import ChatListHeader from './chat-list-header/ChatListHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ChatListItem from './chat-list-item/ChatListItem';
import ChatListAdd from './chat-list-add/ChatListAdd';
import { useState } from 'react';

const ChatList = () => {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);

  return (
    <>
      <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)} />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
        <Divider />
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            maxHeight: '80vh',
            overflow: 'auto',
          }}
        >
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
