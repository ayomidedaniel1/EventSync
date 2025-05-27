import { Session, User } from '@supabase/supabase-js';

export type AuthState = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  setAuth: (session: Session | null) => void;
};
