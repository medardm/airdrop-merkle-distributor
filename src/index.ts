import { MerkleDistributorInfo, NewFormat, OldFormat, parseBalanceMap } from './parse-balance-map'
import MerkleTree from './merkle-tree'
import BalanceTree from './balance-tree'

export type MerkleDistributorInfoType = MerkleDistributorInfo
export type BalanceFormatNew = NewFormat
export type BalanceFormatOld = OldFormat

const merkleDistributor = {
  MerkleTree,
  BalanceTree,
  parseBalanceMap
}

export default merkleDistributor
