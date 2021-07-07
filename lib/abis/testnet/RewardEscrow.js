export default [
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      {
        internalType: 'contract IOikos',
        name: '_oikos',
        type: 'address',
      },
      {
        internalType: 'contract IFeePool',
        name: '_feePool',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newFeePool',
        type: 'address',
      },
    ],
    name: 'FeePoolUpdated',
    type: 'event',
    signature: '0x6d1d088acfe4f30d6014f6f693c61c16258f9784a6ed8439b2c59213eecb6295',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOikos',
        type: 'address',
      },
    ],
    name: 'OikosUpdated',
    type: 'event',
    signature: '0xcb046e61ab451d5fec11d3dfc4c550475bd0abd8df74a421c34be433f197c4df',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
    signature: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerNominated',
    type: 'event',
    signature: '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'time',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Vested',
    type: 'event',
    signature: '0xfbeff59d2bfda0d79ea8a29f8c57c66d48c7a13eabbdb90908d9115ec41c9dc6',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'time',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'VestingEntryCreated',
    type: 'event',
    signature: '0xedd34dc5a5ea12bd847909801d0660781b50e26c7f4cec3c7b308f1ea410635c',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_VESTING_ENTRIES',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xd0cc82e3',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x79ba5097',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'quantity', type: 'uint256' },
    ],
    name: 'appendVestingEntry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb5ddb9c7',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x70a08231',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'checkAccountSchedule',
    outputs: [{ internalType: 'uint256[520]', name: '', type: 'uint256[520]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x449d0eb1',
  },
  {
    constant: true,
    inputs: [],
    name: 'feePool',
    outputs: [{ internalType: 'contract IFeePool', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xae2e933b',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getNextVestingEntry',
    outputs: [{ internalType: 'uint256[2]', name: '', type: 'uint256[2]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2f5bb661',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getNextVestingIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x19e740c0',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getNextVestingQuantity',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x97f46527',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getNextVestingTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6b3905c4',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'getVestingQuantity',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xee1d036c',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'getVestingScheduleEntry',
    outputs: [{ internalType: 'uint256[2]', name: '', type: 'uint256[2]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xda7bd3e9',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'getVestingTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x9b217f90',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
    name: 'nominateNewOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x1627540c',
  },
  {
    constant: true,
    inputs: [],
    name: 'nominatedOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x53a47bb7',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'numVestingEntries',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x204b676a',
  },
  {
    constant: true,
    inputs: [],
    name: 'oikos',
    outputs: [{ internalType: 'contract IOikos', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0c7c95ad',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8da5cb5b',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract IFeePool',
        name: '_feePool',
        type: 'address',
      },
    ],
    name: 'setFeePool',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x19db2228',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract IOikos',
        name: '_oikos',
        type: 'address',
      },
    ],
    name: 'setOikos',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xfe46a480',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'totalEscrowedAccountBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x326a3cfb',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalEscrowedBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x71e780f3',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'totalVestedAccountBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x227d517a',
  },
  {
    constant: false,
    inputs: [],
    name: 'vest',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x458efde3',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'vestingSchedules',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x45e5441f',
  },
];