import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AuthModel } from './auth.model';
import { authApi } from './auth.api';
import { Session } from '@supabase/auth-js/src/lib/types';
import { toastService } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';

export const onFullfiled = (builder: ActionReducerMapBuilder<AuthModel>) => {
  builder.addMatcher(
    authApi.endpoints?.loginUser.matchFulfilled,
    (state: AuthModel, action: PayloadAction<Nullable<Session>>) => {
      const payload = action.payload;
      //
      state.email = payload?.user?.email ?? null;
      state.name = null;
      state.username = null;
      state.groups = [];
      state.token = payload?.access_token ?? null;
      state.isAdmin = false;
      state.isAuth = true;
      //
      toastService.sendToast({
        type: 'success',
        text: 'Welcome Back!',
      });
    },
  );
};
