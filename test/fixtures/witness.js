const testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef
}

const fixtures = [
  {
    description: 'composeTx success',
    feeRate: 615,
    inputs: [
      {
        txId: 'f4668',
        vout: 0,
        value: 10000,
        amount: '10000',
        confirmations: 22,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'a88d1',
        vout: 0,
        value: 21000,
        amount: '21000',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'a88d1',
        vout: 1,
        value: 757928711,
        amount: '757928711',
        confirmations: 2155300,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'adb852',
        vout: 0,
        value: 1000,
        amount: '1000',
        confirmations: 33,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'ed57f6',
        vout: 0,
        value: 10000,
        amount: '10000',
        confirmations: 3321,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'cfc54b',
        vout: 0,
        value: 30000,
        amount: '30000',
        confirmations: 3320,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: '158d17',
        vout: 1,
        value: 1851600,
        amount: '1851600',
        confirmations: 3320,
        own: true,
        coinbase: false,
        address: 'tb1qwqfxvxf5a8pf02at7xz55xgt0j5cmcm9ta8r57',
        path: "m/84'/1'/0'/1/0"
      },
      {
        txId: 'd91c6b',
        vout: 0,
        value: 100000,
        amount: '100000',
        confirmations: 3320,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: '5036d8',
        vout: 0,
        value: 100000,
        amount: '100000',
        confirmations: 2120,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: '06d3a5',
        vout: 18,
        value: 3686229,
        amount: '3686229',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'b07db9',
        vout: 1,
        value: 7306,
        amount: '7306',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      {
        txId: 'f3d23',
        vout: 1,
        value: 2993713,
        amount: '2993713',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 40000000,
        amount: '40000000'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '86715',
      feePerByte: '615',
      bytes: 141,
      max: undefined,
      totalSpent: '40086715',
      inputs: [
        {
          txId: 'a88d1',
          vout: 1,
          value: 757928711,
          confirmations: 2155300,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '757928711'
        }
      ],
      outputs: [
        {
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 40000000,
          amount: '40000000',
          type: 'payment'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '717841996'
        }
      ],
      outputsPermutation: [0, 1]
    },
    shouldThrow: false
  },
  {
    description: 'Missing confirmations',
    feeRate: 615,
    inputs: [
      {
        txId: 'f46689066ac0493cc55920c3918163ccda6c64998d6c078c6254e1c00c36a332',
        vout: 0,
        value: 10000,
        amount: '10000',
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      }
    ],
    outputs: [
      {
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 40000000
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: 'Missing confirmations',
    shouldThrow: true
  },
  {
    description: 'op_return',
    feeRate: 20,
    inputs: [
      {
        txId: 'f46689066ac0493cc55920c3918163ccda6c64998d6c078c6254e1c00c36a332',
        vout: 0,
        value: 1000000,
        amount: '1000000',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 4000,
        amount: '4000'
      },
      {
        type: 'opreturn',
        dataHex: '48656c6c6f576f726c64'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '3240',
      feePerByte: '20',
      bytes: 162,
      max: undefined,
      totalSpent: '7240',
      inputs: [
        {
          txId: 'f46689066ac0493cc55920c3918163ccda6c64998d6c078c6254e1c00c36a332',
          vout: 0,
          value: 1000000,
          confirmations: 2150,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '1000000'
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 4000,
          amount: '4000'
        },
        {
          type: 'opreturn',
          dataHex: '48656c6c6f576f726c64'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '992760'
        }
      ],
      outputsPermutation: [0, 1, 2]
    },
    shouldThrow: false
  },
  {
    description: 'send max',
    feeRate: 202,
    inputs: [
      {
        txId: 'f46689066ac0493cc55920c3918163ccda6c64998d6c078c6254e1c00c36a332',
        vout: 0,
        value: 1000000,
        amount: '1000000',
        confirmations: 2150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      }
    ],
    outputs: [
      {
        type: 'send-max',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '22220',
      feePerByte: '202',
      bytes: 110,
      max: '977780',
      totalSpent: '1000000',
      inputs: [
        {
          txId: 'f46689066ac0493cc55920c3918163ccda6c64998d6c078c6254e1c00c36a332',
          vout: 0,
          value: 1000000,
          confirmations: 2150,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '1000000'
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          amount: '977780'
        }
      ],
      outputsPermutation: [0]
    },
    shouldThrow: false
  },
  {
    description: 'required utxo - only required UTXOs are selected for small payment',
    feeRate: 10,
    inputs: [
      // UTXO 1: large, not required - should NOT be selected
      {
        txId: 'utxo1_large_not_required',
        vout: 0,
        value: 100000,
        amount: '100000',
        confirmations: 100,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0"
      },
      // UTXO 2: small, required - MUST be selected
      {
        txId: 'utxo2_small_required',
        vout: 0,
        value: 5000,
        amount: '5000',
        confirmations: 200,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/1",
        required: true
      },
      // UTXO 3: medium, not required - should NOT be selected
      {
        txId: 'utxo3_medium_not_required',
        vout: 1,
        value: 30000,
        amount: '30000',
        confirmations: 150,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/2"
      },
      // UTXO 4: small, required - MUST be selected
      {
        txId: 'utxo4_small_required',
        vout: 2,
        value: 3000,
        amount: '3000',
        confirmations: 300,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/3",
        required: true
      },
      // UTXO 5: small, not required - should NOT be selected
      {
        txId: 'utxo5_small_not_required',
        vout: 0,
        value: 2000,
        amount: '2000',
        confirmations: 50,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/4"
      },
      // UTXO 6: medium, not required - should NOT be selected
      {
        txId: 'utxo6_medium_not_required',
        vout: 1,
        value: 20000,
        amount: '20000',
        confirmations: 80,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/5"
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 1000,
        amount: '1000'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '2090',
      feePerByte: '10',
      bytes: 209,
      max: undefined,
      totalSpent: '3090',
      inputs: [
        {
          txId: 'utxo2_small_required',
          vout: 0,
          value: 5000,
          confirmations: 200,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/1",
          coinbase: false,
          amount: '5000',
          required: true
        },
        {
          txId: 'utxo4_small_required',
          vout: 2,
          value: 3000,
          confirmations: 300,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/3",
          coinbase: false,
          amount: '3000',
          required: true
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 1000,
          amount: '1000'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '4910'
        }
      ],
      outputsPermutation: [0, 1]
    },
    shouldThrow: false
  },
  {
    description: 'sortingStrategy none - preserves original input/output order',
    feeRate: 10,
    sortingStrategy: 'none',
    inputs: [
      {
        txId: 'bbbb_second_in_bip69',
        vout: 0,
        value: 5000,
        amount: '5000',
        confirmations: 200,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0",
        required: true
      },
      {
        txId: 'aaaa_first_in_bip69',
        vout: 0,
        value: 3000,
        amount: '3000',
        confirmations: 300,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/1",
        required: true
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 1000,
        amount: '1000'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '2090',
      feePerByte: '10',
      bytes: 209,
      max: undefined,
      totalSpent: '3090',
      inputs: [
        {
          txId: 'bbbb_second_in_bip69',
          vout: 0,
          value: 5000,
          confirmations: 200,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '5000',
          required: true
        },
        {
          txId: 'aaaa_first_in_bip69',
          vout: 0,
          value: 3000,
          confirmations: 300,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/1",
          coinbase: false,
          amount: '3000',
          required: true
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 1000,
          amount: '1000'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '4910'
        }
      ],
      outputsPermutation: [0, 1]
    },
    shouldThrow: false
  },
  {
    description: 'sortingStrategy bip69 - sorts inputs by txid and outputs by value',
    feeRate: 10,
    sortingStrategy: 'bip69',
    inputs: [
      {
        txid: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        vout: 0,
        value: 5000,
        amount: '5000',
        confirmations: 200,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0",
        required: true
      },
      {
        txid: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        vout: 0,
        value: 3000,
        amount: '3000',
        confirmations: 300,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/1",
        required: true
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 1000,
        amount: '1000'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '2090',
      feePerByte: '10',
      bytes: 209,
      max: undefined,
      totalSpent: '3090',
      inputs: [
        {
          txid: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          vout: 0,
          value: 3000,
          confirmations: 300,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/1",
          coinbase: false,
          amount: '3000',
          required: true
        },
        {
          txid: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          vout: 0,
          value: 5000,
          confirmations: 200,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '5000',
          required: true
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 1000,
          amount: '1000'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '4910'
        }
      ],
      outputsPermutation: [0, 1]
    },
    shouldThrow: false
  },
  {
    description: 'sortingStrategy random (default) - produces valid result with shuffled order',
    feeRate: 10,
    inputs: [
      {
        txId: 'bbbb_second_in_bip69',
        vout: 0,
        value: 5000,
        amount: '5000',
        confirmations: 200,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/0",
        required: true
      },
      {
        txId: 'aaaa_first_in_bip69',
        vout: 0,
        value: 3000,
        amount: '3000',
        confirmations: 300,
        own: true,
        coinbase: false,
        address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
        path: "m/84'/1'/0'/0/1",
        required: true
      }
    ],
    outputs: [
      {
        type: 'payment',
        address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
        value: 1000,
        amount: '1000'
      }
    ],
    network: testnet,
    changeAddress: {
      address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
      path: "m/84'/1'/0'/0/0"
    },
    txType: 'p2wpkh',
    expected: {
      type: 'final',
      fee: '2090',
      feePerByte: '10',
      bytes: 209,
      max: undefined,
      totalSpent: '3090',
      inputs: [
        {
          txId: 'bbbb_second_in_bip69',
          vout: 0,
          value: 5000,
          confirmations: 200,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          coinbase: false,
          amount: '5000',
          required: true
        },
        {
          txId: 'aaaa_first_in_bip69',
          vout: 0,
          value: 3000,
          confirmations: 300,
          own: true,
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/1",
          coinbase: false,
          amount: '3000',
          required: true
        }
      ],
      outputs: [
        {
          type: 'payment',
          address: 'tb1quawu6eyfuechu3qhdeejnrzne9y7shr08u8zzt',
          value: 1000,
          amount: '1000'
        },
        {
          type: 'change',
          address: 'tb1qul5mzh5phe7xqyqek0nl42hflfrn7ugxck59jd',
          path: "m/84'/1'/0'/0/0",
          amount: '4910'
        }
      ],
      outputsPermutation: [0, 1]
    },
    shouldThrow: false
  }
]

module.exports = fixtures
