/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IEligibility, IEligibilityInterface } from '../../../contracts/interfaces/IEligibility';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'lookup',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IEligibility__factory {
  static readonly abi = _abi;
  static createInterface(): IEligibilityInterface {
    return new utils.Interface(_abi) as IEligibilityInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IEligibility {
    return new Contract(address, _abi, signerOrProvider) as IEligibility;
  }
}
