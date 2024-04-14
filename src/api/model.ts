export interface loginForm {
  captcha: string;
  password: string;
  username: string;
}
export interface forgetPawwsordForm {
  confirmPassword: string;
  newPassword: string;
  username: string;
}
export interface updatePawwsordForm {
  id: number;
  confirmPassword: string;
  newPassword: string;
  oldPassword: string;
}
export interface updateUserInfoForm {
  id: number;
  characterName: string;
  isAdmin: boolean;
  name: string;
  password: string;
  username: string;
}

export interface userList {
  pageNumber: number;
  pageSize: number;
}

export interface pageList {
  pageNumber: number;
  pageSize: number;
  organization?: string;
  publisher?: string;
  reportName?: string;
}

export interface newUserForm {
  characterName: string;
  isAdmin: boolean;
  name: string;
  password: string;
  username: string;
}
