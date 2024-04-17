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

export interface newAssetForm {
  accountName: string;
  ip: string;
  nodeName: string;
  sshKey: number;
  sshPort: number;
}

export interface updateAssetForm {
  accountName?: string;
  id: number;
  ip?: string;
  nodeName?: string;
  sshKey?: number;
  sshPort?: number;
}

export interface newTaskForm {
  endIp?: string;
  endPort?: number;
  name: string;
  startIp?: string;
  startPort?: number;
  type: string;
  vulnScanIp?: string;
}

export interface QianXinForm {
  apiKey: string;
  isWeb: string;
  page: string;
  pageSize: string;
  querySentence: string;
}

export interface scanPortForm {
  endIp: string;
  endPort: string;
  startIp: string;
  startPort: string;
}
