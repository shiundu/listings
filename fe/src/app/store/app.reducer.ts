import { ActionReducerMap } from '@ngrx/store';

import { listingsReducer, ListingState } from '../listings/store/listings.reducer';

export interface AppState {
  listings: ListingState;
}

export const appReducer: ActionReducerMap<AppState> = {
  listings: listingsReducer,
};
