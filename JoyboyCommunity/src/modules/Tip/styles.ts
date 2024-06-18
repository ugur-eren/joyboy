import {Platform} from 'react-native';

import {Spacing, ThemedStyleSheet} from '../../styles';

export default ThemedStyleSheet((theme) => ({
  modal: {
    backgroundColor: theme.colors.surface,
    paddingBottom: Spacing.xxlarge,
  },

  header: {
    width: '100%',
    marginBottom: Spacing.medium,
    paddingTop: Spacing.small,
    paddingLeft: Spacing.small,
    paddingBottom: Spacing.medium,
    paddingRight: Spacing.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: theme.colors.primary,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardContent: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  title: {
    marginBottom: Spacing.xsmall,
  },

  cardContentText: {
    paddingTop: Spacing.small,
  },
  likes: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },

  sending: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  recipient: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingBottom: Spacing.small,
  },
  card: {
    width: '100%',
    height: 112,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 16,
    paddingLeft: Spacing.small,
    paddingRight: Spacing.small,
    paddingTop: Spacing.medium,
    justifyContent: 'center',
    paddingBottom: Spacing.medium,
  },

  comment: {
    paddingTop: Spacing.small,
    fontSize: 13,
    fontWeight: 400,
    color: theme.colors.inputPlaceholder,
  },

  pickerContainer: {
    flex: 1,
    gap: 20,
    paddingTop: Spacing.xxlarge,
    paddingBottom: Spacing.xxlarge,
  },

  more: {
    paddingLeft: Spacing.small,
    color: theme.colors.primary,
  },

  likeIcon: {
    color: theme.colors.primary,
  },
  pickerSelect: {
    fontSize: 16,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.medium,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 80,
    color: theme.colors.inputPlaceholder,
    paddingRight: 0,
    paddingLeft: Spacing.normal,
    fontWeight: 600,
  },

  content: {
    padding: Spacing.xlarge,
    paddingTop: Platform.OS === 'ios' ? Spacing.xlarge : Spacing.xsmall,
  },

  submitButton: {
    paddingTop: Spacing.xlarge,
  },
}));