import * as mysql from 'mysql';

export default interface MyClusterConfig {
    options?: mysql.PoolClusterConfig;
    /**
     * 主节点
     */
    master: Array<mysql.PoolConfig>;
    /**
     * 从节点
     */
    slave?: Array<mysql.PoolConfig>;
    /**
     * 主节点是否用于读取
     */
    isMasterRead?: boolean;
}