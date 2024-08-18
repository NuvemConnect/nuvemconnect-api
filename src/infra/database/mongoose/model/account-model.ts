import { model, Schema } from 'mongoose'
import { AccountProps } from '../../../../domain/entities/account'
import { Replace } from '../../../../domain/utils/replace'


export const accountModel = model<Replace<AccountProps, {email: string}>>('Account', new Schema({
  uuid: String,
  email: String,
  password: String
}))