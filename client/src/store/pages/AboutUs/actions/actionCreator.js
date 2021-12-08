import { createAction as create } from '@reduxjs/toolkit';

export const createAction = actionName => create(`/aboutUs${actionName}`);
