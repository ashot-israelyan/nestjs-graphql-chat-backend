import { graphql } from '../gql';
import { MessagesQueryVariables } from '../gql/graphql';
import { useQuery } from '@apollo/client';

export const getMessagesDocument = graphql(`
    query Messages($chatId: String!) {
        messages(chatId: $chatId) {
            ...MessageFragment
        }
    }
`);

const useGetMessages = (variables: MessagesQueryVariables) => {
  return useQuery(getMessagesDocument, { variables });
};

export default useGetMessages;

