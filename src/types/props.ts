export interface zsOtherInfoType {
  sex: string,
  hobbies: string[]
}

export interface TreeType {
  id: number
  label: string,
  children?: TreeType[]
}