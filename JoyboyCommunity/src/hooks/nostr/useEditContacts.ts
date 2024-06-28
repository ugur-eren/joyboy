import {NDKKind} from '@nostr-dev-kit/ndk';
import {useMutation} from '@tanstack/react-query';

import {useNostrContext} from '../../context/NostrContext';
import {useAuth} from '../../store/auth';

export const useEditContacts = () => {
  const {ndk} = useNostrContext();
  const {publicKey} = useAuth();

  return useMutation({
    mutationKey: ['editContacts'],
    mutationFn: async (data: {pubkey: string; type: 'add' | 'remove'}) => {
      const contacts = await ndk.fetchEvent({
        kinds: [NDKKind.Contacts],
        authors: [publicKey],
      });

      if (data.type === 'add') {
        contacts.tags.push(['p', data.pubkey]);
      } else {
        contacts.tags = contacts.tags.filter((tag) => tag[1] !== data.pubkey);
      }

      return contacts.publish();
    },
  });
};
