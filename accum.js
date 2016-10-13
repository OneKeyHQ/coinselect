'use-strict'

const utils = require('./utils')

// O(n)
module.exports = function accumulative (utxos, outputs, feeRate) {
  var outAccum = utils.sum(outputs)

  // accumulators
  var bytesAccum = utils.transactionBytes([], outputs)
  var inAccum = 0
  var inputs = []

  for (var i = 0; i < utxos.length; ++i) {
    var utxo = utxos[i]

    bytesAccum += utils.inputBytes(utxo)
    inAccum += utxo.value
    inputs.push(utxo)

    var fee = feeRate * bytesAccum

    // go again?
    if (inAccum < outAccum + fee) continue

    return utils.finalize(inputs, outputs, feeRate)
  }

  return { fee: feeRate * bytesAccum }
}
