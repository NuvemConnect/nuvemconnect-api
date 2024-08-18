import { Account } from '../../../../domain/entities/account'
import { Email } from '../../../../domain/entities/email'
import { IAccountRepository } from '../../../../domain/repositories/account-repository'
import { accountModel } from '../model/account-model'


export class AccountRepositoryMongoose implements IAccountRepository {
  async save (account: Account): Promise<void> {
    const acc = new accountModel({
      uuid: account.uuid,
      email: account.email.value,
      password: account.password
    })
    acc.save()
  }
  async findByEmail (email: Email): Promise<Account | null> {
    const data = await accountModel.findOne({ email: email.value })

    if(!data) {
      return null
    }

    const acc = new Account({ uuid: data.uuid, email: new Email(data.email), password: data.password })

    return acc
  }

}