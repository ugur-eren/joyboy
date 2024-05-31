import {Feather} from '@expo/vector-icons';
import {useState} from 'react';
import {Pressable, View} from 'react-native';

import {Button, IconButton, Menu, Text} from '../../../components';
import {useProfile} from '../../../hooks';
import {useAuth} from '../../../store/auth';
import {ProfileHead} from '../Head';
import styles from './styles';

export type ProfileInfoProps = {
  publicKey: string;
};

export const ProfileInfo: React.FC<ProfileInfoProps> = ({publicKey: userPublicKey}) => {
  const {data: profile} = useProfile({publicKey: userPublicKey});

  const [menuOpen, setMenuOpen] = useState(false);
  const publicKey = useAuth((state) => state.publicKey);

  const isSelf = publicKey === userPublicKey;

  return (
    <View>
      <ProfileHead
        profilePhoto={profile?.picture && {uri: profile.picture}}
        coverPhoto={profile?.banner && {uri: profile.banner}}
        showSettingsButton={isSelf}
        buttons={
          isSelf ? (
            <>
              <Button small style={styles.secondaryButton} textStyle={styles.secondaryButtonText}>
                Edit profile
              </Button>

              <Menu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                handle={
                  <IconButton
                    icon="more-vertical"
                    size={20}
                    color="#14142c"
                    style={styles.iconButton}
                    onPress={() => setMenuOpen(true)}
                  />
                }
              >
                <Menu.Item
                  label={profile?.username ? `Share @${profile.username}` : 'Share'}
                  icon="share"
                />
                <Menu.Item label="About" icon="info" />
              </Menu>
            </>
          ) : (
            <>
              <Button
                small
                left={
                  <Feather name="user-plus" size={16} color="white" style={styles.buttonIcon} />
                }
              >
                Connect
              </Button>

              <IconButton
                icon="message-square"
                size={20}
                style={styles.iconButton}
                color="#14142c"
              />

              <Menu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                handle={
                  <IconButton
                    icon="more-vertical"
                    size={20}
                    color="#14142c"
                    style={styles.iconButton}
                    onPress={() => setMenuOpen(true)}
                  />
                }
              >
                <Menu.Item
                  label={profile?.username ? `Tip @${profile.username}` : 'Tip'}
                  icon="dollar-sign"
                />
                <Menu.Item
                  label={profile?.username ? `Share @${profile.username}` : 'Share'}
                  icon="share"
                />
                <Menu.Item label="About" icon="info" />
                <Menu.Item label="Report user" icon="flag" />
              </Menu>
            </>
          )
        }
      />

      <View style={styles.info}>
        <Text weight="bold" style={styles.displayName}>
          {profile?.displayName}
        </Text>

        <View style={styles.usernameContainer}>
          {profile?.username ? (
            <Text weight="medium" style={styles.username}>
              @{profile.username}
            </Text>
          ) : null}

          <Pressable style={styles.publicKey}>
            <Text
              weight="medium"
              style={styles.publicKeyText}
              numberOfLines={1}
              ellipsizeMode="middle"
            >
              {userPublicKey}
            </Text>

            <IconButton size={16} icon="copy" color="#EC796B" />
          </Pressable>
        </View>

        {profile?.about ? (
          <Text weight="medium" style={styles.bio}>
            {profile.about}
          </Text>
        ) : null}

        <View style={styles.connections}>
          <Feather name="user-plus" size={16} color="#14142C" />

          <Text weight="semiBold" style={styles.connectionsText}>
            13 Connections
          </Text>
        </View>
      </View>
    </View>
  );
};
