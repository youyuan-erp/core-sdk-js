declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  park: ParkAPI;
  draft: DraftAPI;
  vehicle: VehicleAPI;
  repair: RepairAPI;
  maintain: MaintainAPI;
  record: RecordAPI;
}

declare global {
  export interface Options {
    base?: string;
    token?: string | (() => string);
  }

  export interface ParkAPI {
    /**
     * Create a park
     */
    createPark(req: CreateParkRequest): Promise<CreateParkResponse>;
    /**
     * List all parks
     */
    listParks(req: ListParksRequest): Promise<ListParksResponse>;
    /**
     * Find park by id
     */
    getPark(req: GetParkRequest): Promise<GetParkResponse>;
    /**
     * Update park
     */
    updatePark(req: UpdateParkRequest): Promise<UpdateParkResponse>;
    /**
     *
     */
    deletePark(req: DeleteParkRequest): Promise<DeleteParkResponse>;
  }
  export interface DraftAPI {
    /**
     * Create a draft
     */
    createDraft(req: CreateDraftRequest): Promise<CreateDraftResponse>;
    /**
     * List all drafts
     */
    listDafts(req: ListDaftsRequest): Promise<ListDaftsResponse>;
    /**
     * Find draft by id
     */
    getDraft(req: GetDraftRequest): Promise<GetDraftResponse>;
    /**
     * Update draft
     */
    updateDraft(req: UpdateDraftRequest): Promise<UpdateDraftResponse>;
    /**
     *
     */
    deleteDraft(req: DeleteDraftRequest): Promise<DeleteDraftResponse>;
  }
  export interface VehicleAPI {
    /**
     * Create a vehicle
     */
    createVehicle(req: CreateVehicleRequest): Promise<CreateVehicleResponse>;
    /**
     * List all vehicles
     */
    listVehicles(req: ListVehiclesRequest): Promise<ListVehiclesResponse>;
    /**
     * Find vehicle by id
     */
    getVehicle(req: GetVehicleRequest): Promise<GetVehicleResponse>;
    /**
     * Update vehicle
     */
    updateVehicle(req: UpdateVehicleRequest): Promise<UpdateVehicleResponse>;
    /**
     *
     */
    deleteVehicle(req: DeleteVehicleRequest): Promise<DeleteVehicleResponse>;
    /**
     * List all alerts by vehicleId
     */
    listVehicleAlerts(req: ListVehicleAlertsRequest): Promise<ListVehicleAlertsResponse>;
  }
  export interface RepairAPI {
    /**
     * Create a repair order
     */
    createRepair(req: CreateRepairRequest): Promise<CreateRepairResponse>;
    /**
     * List all repair orders
     */
    listRepairs(req: ListRepairsRequest): Promise<ListRepairsResponse>;
    /**
     * Find repair order by id
     */
    getRepair(req: GetRepairRequest): Promise<GetRepairResponse>;
    /**
     * update repair order
     */
    updateRepair(req: UpdateRepairRequest): Promise<UpdateRepairResponse>;
    /**
     *
     */
    deleteRepair(req: DeleteRepairRequest): Promise<DeleteRepairResponse>;
    /**
     * update repair order record
     */
    updateRecord(req: UpdateRecordRequest): Promise<UpdateRecordResponse>;
  }
  export interface MaintainAPI {
    /**
     * Create a maintain order
     */
    createMaintain(req: CreateMaintainRequest): Promise<CreateMaintainResponse>;
    /**
     * List all maintain orders
     */
    listMaintains(req: ListMaintainsRequest): Promise<ListMaintainsResponse>;
    /**
     * Find maintain order by id
     */
    getMaintain(req: GetMaintainRequest): Promise<GetMaintainResponse>;
    /**
     * update maintain order
     */
    updateMaintain(req: UpdateMaintainRequest): Promise<UpdateMaintainResponse>;
    /**
     *
     */
    deleteMaintain(req: DeleteMaintainRequest): Promise<DeleteMaintainResponse>;
    /**
     * update maintain order appearance record
     */
    updateAppearanceRecord(
      req: UpdateAppearanceRecordRequest
    ): Promise<UpdateAppearanceRecordResponse>;
    /**
     * update maintain order software record
     */
    updateSoftwareRecord(req: UpdateSoftwareRecordRequest): Promise<UpdateSoftwareRecordResponse>;
  }
  export interface RecordAPI {
    /**
     * Create a record
     */
    createRecord(req: CreateRecordRequest): Promise<CreateRecordResponse>;
    /**
     * List all records
     */
    listRecords(req: ListRecordsRequest): Promise<ListRecordsResponse>;
    /**
     * Find record by id
     */
    getRecord(req: GetRecordRequest): Promise<GetRecordResponse>;
    /**
     * Update record
     */
    updateRecord(req: UpdateRecordRequest): Promise<UpdateRecordResponse>;
    /**
     *
     */
    deleteRecord(req: DeleteRecordRequest): Promise<DeleteRecordResponse>;
  }

  export interface CreateParkRequest {
    body: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      name: string;
      address: string;
      appearance: string;
      software: string;
    };
  }
  export interface CreateParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListParksRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      name_like?: string;
    };
  }
  export interface ListParksResponse {
    content?: ({
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetParkRequest {
    parkId: string;
  }
  export interface GetParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateParkRequest {
    parkId: string;
    /**
     * 车场信息
     */
    body: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    };
  }
  export interface UpdateParkResponse {
    content?: {
      /**
       * 车场名
       */
      name?: string;
      /**
       * 车场地址
       */
      address?: string;
      /**
       * 外观检测默认组ns
       */
      appearance?: string;
      /**
       * 软件诊断默认组ns
       */
      software?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteParkRequest {
    parkId: string;
  }
  export interface CreateDraftRequest {
    body: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      type: "VEHICLE" | "REPAIR" | "MAINTAIN";
      ns: string;
      createBy: string;
    };
  }
  export interface CreateDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListDaftsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      type: "VEHICLE" | "REPAIR" | "MAINTAIN";
      ns_like?: string;
      createBy?: string;
    };
  }
  export interface ListDaftsResponse {
    content?: ({
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetDraftRequest {
    draftId: string;
  }
  export interface GetDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateDraftRequest {
    draftId: string;
    /**
     * 草稿箱信息
     */
    body: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    };
  }
  export interface UpdateDraftResponse {
    content?: {
      /**
       * 草稿所属ns
       */
      ns?: string;
      /**
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿类型
       */
      type?: "VEHICLE" | "REPAIR" | "MAINTAIN";
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteDraftRequest {
    draftId: string;
  }
  export interface CreateVehicleRequest {
    body: {
      terminal: string;
      park: string;
      purchaseAt: Date;
      plateAt: Date;
      operateAt: Date;
      retireAt?: Date;
      year: number;
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      brands: string;
      plate: string;
      vin: string;
      jobNum: string;
      num: string;
      catl: string;
      batteryPN: string;
      batteryNum: string;
      batteryPropRight: string;
      power: number;
      bmuHardware: string;
      bmuSoftware: string;
      cscHardware: string;
      cscSoftware: string;
      rdb: string;
      remark?: string;
      status?: string;
      softwarePic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      frontPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      nameplatePic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      meterPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      batteryPic: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      createBy: string;
    };
  }
  export interface CreateVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListVehiclesRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      ticket?: string;
      createAt_gte?: string;
      createAt_lte?: string;
      plate?: string;
      crm?: string;
      vin?: string;
      createBy?: string;
      brands?: string | string[];
      terminal?: string | string[];
      park?: string | string[];
      status?: ("PENDING" | "PASSED" | "REJECTED") | ("PENDING" | "PASSED" | "REJECTED")[];
    };
  }
  export interface ListVehiclesResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetVehicleRequest {
    vehicleId: string;
  }
  export interface GetVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateVehicleRequest {
    vehicleId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    };
  }
  export interface UpdateVehicleResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态
       */
      status?: "CREATING" | "FILLING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 车场
       */
      park?: string;
      /**
       * 购买日期
       */
      purchaseAt?: Date;
      /**
       * 上牌日期
       */
      plateAt?: Date;
      /**
       * 运营日期
       */
      operateAt?: Date;
      /**
       * 报废日期
       */
      retireAt?: Date;
      /**
       * 年份
       */
      year?: number;
      /**
       * 车辆行驶证
       */
      license?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 整车品牌
       */
      brands?: string;
      /**
       * 车牌号
       */
      plate?: string;
      /**
       * VIN号
       */
      vin?: string;
      /**
       * 车辆工号
       */
      jobNum?: string;
      /**
       * 车辆自编号
       */
      num?: string;
      /**
       * CATL项目名称
       */
      catl?: string;
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
      /**
       * 电池产权
       */
      batteryPropRight?: string;
      /**
       * 功率
       */
      power?: number;
      /**
       * BMU硬件版本
       */
      bmuHardware?: string;
      /**
       * BMU软件版本
       */
      bmuSoftware?: string;
      /**
       * CSC硬件版本
       */
      cscHardware?: string;
      /**
       * CSC软件版本
       */
      cscSoftware?: string;
      /**
       * RDB
       */
      rdb?: string;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 上位机软件图片
       */
      softwarePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name?: string;
        /**
         * oss上的文件名
         */
        ossName?: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid?: string;
        /**
         * url
         */
        url?: string;
      }[];
      /**
       * 录入者
       */
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteVehicleRequest {
    vehicleId: string;
  }
  export interface ListVehicleAlertsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      level?: number[] | number;
    };
    vehicleId: string;
  }
  export interface ListVehicleAlertsResponse {
    content?: ({
      /**
       * 故障等级
       */
      level?: number;
      /**
       * 故障码
       */
      code?: string;
      /**
       * 故障名称
       */
      name?: string;
      /**
       * 开始报警的时间
       */
      startedAt?: Date;
      /**
       * 次数
       */
      count?: number;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface CreateRepairRequest {
    /**
     * 维修单创建信息
     */
    body: {
      maintain?: string;
      vehicle: string;
      plate: string;
      vin: string;
      address: string;
      reporter?: string;
      reporterPhone?: string;
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee: string;
      /**
       * 派送时间
       */
      assignAt: Date;
      /**
       * 创建者
       */
      createBy: string;
      ticket?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface CreateRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListRepairsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      id_like?: string;
      status?:
        | "CREATING"
        | "FILLING"
        | "DELIVERED"
        | "REPARING"
        | "REPARED"
        | "PAUSING"
        | "PENDING"
        | "PASSED";
      createAt_gt?: Date;
      createAt_lt?: Date;
      dispatchWorker_like?: string;
      plate_like?: string;
      crm_like?: string;
      vin_like?: string;
    };
  }
  export interface ListRepairsResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetRepairRequest {
    repairId: string;
  }
  export interface GetRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateRepairRequest {
    repairId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    };
  }
  export interface UpdateRepairResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆车牌
       */
      plate?: string;
      /**
       * 关联车辆vin码
       */
      vin?: string;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维修单维修记录
       */
      record?: {
        signAddress: string;
        arrivalAt: Date;
        mileages: string;
        routeMap?: string;
        faultCell: string;
        workHours: string;
        failReason: string;
        processMethod: string;
        faultAttr: string;
        faultMode: string;
        backups?: {
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 单价
           */
          unitPrice?: string;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
        }[];
        livePic: string[];
        resultDesc: string;
        softwarePic: string[];
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        otherPic?: string[];
        dataFile?: string;
        otherCost?: string;
        remark?: string;
        workers: {
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: string;
          /**
           * 工作量
           */
          Workload?: number;
        }[];
        pauseReason?: string;
        status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      };
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
      createBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteRepairRequest {
    repairId: string;
  }
  export interface UpdateRecordRequest {
    repairId: string;
    /**
     * 维修单维修记录
     */
    body: {
      signAddress: string;
      arrivalAt: Date;
      mileages: string;
      routeMap?: string;
      faultCell: string;
      workHours: string;
      failReason: string;
      processMethod: string;
      faultAttr: string;
      faultMode: string;
      backups?: {
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 单价
         */
        unitPrice?: string;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
      }[];
      livePic: string[];
      resultDesc: string;
      softwarePic: string[];
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      otherPic?: string[];
      dataFile?: string;
      otherCost?: string;
      remark?: string;
      workers: {
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: string;
        /**
         * 工作量
         */
        Workload?: number;
      }[];
      pauseReason?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateRecordResponse {
    /**
     * 维修单维修记录
     */
    content?: {
      signAddress: string;
      arrivalAt: Date;
      mileages: string;
      routeMap?: string;
      faultCell: string;
      workHours: string;
      failReason: string;
      processMethod: string;
      faultAttr: string;
      faultMode: string;
      backups?: {
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 单价
         */
        unitPrice?: string;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
      }[];
      livePic: string[];
      resultDesc: string;
      softwarePic: string[];
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      otherPic?: string[];
      dataFile?: string;
      otherCost?: string;
      remark?: string;
      workers: {
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: string;
        /**
         * 工作量
         */
        Workload?: number;
      }[];
      pauseReason?: string;
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface CreateMaintainRequest {
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    };
  }
  export interface CreateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListMaintainsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      id_like?: string;
      status?:
        | "CREATING"
        | "WAITING"
        | "MAINTAINING"
        | "REPARING"
        | "MAINTAINED"
        | "PENDING"
        | "PASSED";
      createAt_gt?: Date;
      createAt_lt?: Date;
      terminal_like?: string;
      plate_like?: string;
      crm_like?: string;
      vin_like?: string;
    };
  }
  export interface ListMaintainsResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetMaintainRequest {
    maintainId: string;
  }
  export interface GetMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateMaintainRequest {
    maintainId: string;
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    };
  }
  export interface UpdateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维保单工单状态
       */
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
      /**
       * 关联车辆 id
       */
      vehicle?: string;
      /**
       * 关联车辆 终端用户
       */
      terminal?: string;
      /**
       * 关联车辆 车牌号
       */
      plate?: string;
      /**
       * 关联车辆 vin
       */
      vin?: string;
      /**
       * 关联车辆 整车品牌
       */
      brands?: string;
      /**
       * 外观检查组
       */
      appearance?: string;
      /**
       * 软件诊断组
       */
      software?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        appearanceSignAddress: string;
        appearanceArrivalAt: Date;
        appearanceRouteMap?: string;
        appearanceWorkers: string[];
        meterAlarm: boolean;
        meterAlarmResult?: boolean;
        meterAlarmDesc?: string;
        boxDamage: boolean;
        boxDamageResult?: boolean;
        boxDamageDesc?: string;
        electricLeakage: boolean;
        electricLeakageResult?: boolean;
        electricLeakageDesc?: string;
        valveLoose: boolean;
        valveLooseResult?: boolean;
        valveLooseDesc?: string;
        coverAbnormal: boolean;
        coverAbnormalResult?: boolean;
        coverAbnormalDesc?: string;
        headLoose: boolean;
        headLooseResult?: boolean;
        headLooseDesc?: string;
        boltLoose: boolean;
        boltLooseResult?: boolean;
        boltLooseDesc?: string;
        msdAbnormal: boolean;
        msdAbnormalResult?: boolean;
        msdAbnormalDesc?: string;
        hvWireWear: boolean;
        hvWireWearResult?: boolean;
        hvWireWearDesc?: string;
        lvWireWear: boolean;
        lvWireWearResult?: boolean;
        lvWireWearDesc?: string;
        hvConnectorFasten: boolean;
        hvConnectorFastenResult?: boolean;
        hvConnectorFastenDesc?: string;
        lvConnectorFasten: boolean;
        lvConnectorFastenResult?: boolean;
        lvConnectorFastenDesc?: string;
        frontPic: string[];
        nameplatePic: string[];
        meterPic: string[];
        batteryPic: string[];
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        softwareSignAddress: string;
        softwareArrivalAt: Date;
        softwareRouteMap?: string;
        softwareWorkers: string[];
        softwareStartPic: string[];
        softwareEndPic: string[];
        soh: string;
        sohResult?: string;
        sohDesc?: string;
        current: string;
        currentResult?: string;
        currentDesc?: string;
        soc: string;
        socResult?: string;
        roc: string;
        rocResult?: string;
        socDesc?: string;
        addVoltage: string;
        addVoltageResult?: string;
        totalVoltage: string;
        totalVoltageResult?: string;
        addVoltageDesc?: string;
        maxVoltage: string;
        maxVoltageResult?: string;
        maxVoltageDesc?: string;
        minVoltage: string;
        minVoltageResult?: string;
        minVoltageDesc?: string;
        maxTemperature: string;
        maxTemperatureResult?: string;
        maxTemperatureDesc?: string;
        minTemperature: string;
        minTemperatureResult?: string;
        minTemperatureDesc?: string;
        diffTemperature: string;
        diffTemperatureResult?: string;
        diffTemperatureDesc?: string;
        batteryBalance: "LOW" | "MIDDLE" | "HIGH";
        diffVoltage: string;
        diffVoltageResult?: string;
        diffVoltageDesc?: string;
        chargePositive: string;
        chargePositiveResult?: string;
        chargeNegative: string;
        chargeNegativeResult?: string;
        chargePositiveDesc?: string;
        nochargePositive: string;
        nochargePositiveResult?: string;
        nochargeNegative: string;
        nochargeNegativeResult?: string;
        nochargePositiveDesc?: string;
        status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteMaintainRequest {
    maintainId: string;
  }
  export interface UpdateAppearanceRecordRequest {
    maintainId: string;
    /**
     * 维保单外观诊断记录
     */
    body: {
      appearanceSignAddress: string;
      appearanceArrivalAt: Date;
      appearanceRouteMap?: string;
      appearanceWorkers: string[];
      meterAlarm: boolean;
      meterAlarmResult?: boolean;
      meterAlarmDesc?: string;
      boxDamage: boolean;
      boxDamageResult?: boolean;
      boxDamageDesc?: string;
      electricLeakage: boolean;
      electricLeakageResult?: boolean;
      electricLeakageDesc?: string;
      valveLoose: boolean;
      valveLooseResult?: boolean;
      valveLooseDesc?: string;
      coverAbnormal: boolean;
      coverAbnormalResult?: boolean;
      coverAbnormalDesc?: string;
      headLoose: boolean;
      headLooseResult?: boolean;
      headLooseDesc?: string;
      boltLoose: boolean;
      boltLooseResult?: boolean;
      boltLooseDesc?: string;
      msdAbnormal: boolean;
      msdAbnormalResult?: boolean;
      msdAbnormalDesc?: string;
      hvWireWear: boolean;
      hvWireWearResult?: boolean;
      hvWireWearDesc?: string;
      lvWireWear: boolean;
      lvWireWearResult?: boolean;
      lvWireWearDesc?: string;
      hvConnectorFasten: boolean;
      hvConnectorFastenResult?: boolean;
      hvConnectorFastenDesc?: string;
      lvConnectorFasten: boolean;
      lvConnectorFastenResult?: boolean;
      lvConnectorFastenDesc?: string;
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateAppearanceRecordResponse {
    /**
     * 维保单外观诊断记录
     */
    content?: {
      appearanceSignAddress: string;
      appearanceArrivalAt: Date;
      appearanceRouteMap?: string;
      appearanceWorkers: string[];
      meterAlarm: boolean;
      meterAlarmResult?: boolean;
      meterAlarmDesc?: string;
      boxDamage: boolean;
      boxDamageResult?: boolean;
      boxDamageDesc?: string;
      electricLeakage: boolean;
      electricLeakageResult?: boolean;
      electricLeakageDesc?: string;
      valveLoose: boolean;
      valveLooseResult?: boolean;
      valveLooseDesc?: string;
      coverAbnormal: boolean;
      coverAbnormalResult?: boolean;
      coverAbnormalDesc?: string;
      headLoose: boolean;
      headLooseResult?: boolean;
      headLooseDesc?: string;
      boltLoose: boolean;
      boltLooseResult?: boolean;
      boltLooseDesc?: string;
      msdAbnormal: boolean;
      msdAbnormalResult?: boolean;
      msdAbnormalDesc?: string;
      hvWireWear: boolean;
      hvWireWearResult?: boolean;
      hvWireWearDesc?: string;
      lvWireWear: boolean;
      lvWireWearResult?: boolean;
      lvWireWearDesc?: string;
      hvConnectorFasten: boolean;
      hvConnectorFastenResult?: boolean;
      hvConnectorFastenDesc?: string;
      lvConnectorFasten: boolean;
      lvConnectorFastenResult?: boolean;
      lvConnectorFastenDesc?: string;
      frontPic: string[];
      nameplatePic: string[];
      meterPic: string[];
      batteryPic: string[];
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateSoftwareRecordRequest {
    maintainId: string;
    /**
     * 维保单软件诊断记录
     */
    body: {
      softwareSignAddress: string;
      softwareArrivalAt: Date;
      softwareRouteMap?: string;
      softwareWorkers: string[];
      softwareStartPic: string[];
      softwareEndPic: string[];
      soh: string;
      sohResult?: string;
      sohDesc?: string;
      current: string;
      currentResult?: string;
      currentDesc?: string;
      soc: string;
      socResult?: string;
      roc: string;
      rocResult?: string;
      socDesc?: string;
      addVoltage: string;
      addVoltageResult?: string;
      totalVoltage: string;
      totalVoltageResult?: string;
      addVoltageDesc?: string;
      maxVoltage: string;
      maxVoltageResult?: string;
      maxVoltageDesc?: string;
      minVoltage: string;
      minVoltageResult?: string;
      minVoltageDesc?: string;
      maxTemperature: string;
      maxTemperatureResult?: string;
      maxTemperatureDesc?: string;
      minTemperature: string;
      minTemperatureResult?: string;
      minTemperatureDesc?: string;
      diffTemperature: string;
      diffTemperatureResult?: string;
      diffTemperatureDesc?: string;
      batteryBalance: "LOW" | "MIDDLE" | "HIGH";
      diffVoltage: string;
      diffVoltageResult?: string;
      diffVoltageDesc?: string;
      chargePositive: string;
      chargePositiveResult?: string;
      chargeNegative: string;
      chargeNegativeResult?: string;
      chargePositiveDesc?: string;
      nochargePositive: string;
      nochargePositiveResult?: string;
      nochargeNegative: string;
      nochargeNegativeResult?: string;
      nochargePositiveDesc?: string;
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateSoftwareRecordResponse {
    /**
     * 维保单软件诊断记录
     */
    content?: {
      softwareSignAddress: string;
      softwareArrivalAt: Date;
      softwareRouteMap?: string;
      softwareWorkers: string[];
      softwareStartPic: string[];
      softwareEndPic: string[];
      soh: string;
      sohResult?: string;
      sohDesc?: string;
      current: string;
      currentResult?: string;
      currentDesc?: string;
      soc: string;
      socResult?: string;
      roc: string;
      rocResult?: string;
      socDesc?: string;
      addVoltage: string;
      addVoltageResult?: string;
      totalVoltage: string;
      totalVoltageResult?: string;
      addVoltageDesc?: string;
      maxVoltage: string;
      maxVoltageResult?: string;
      maxVoltageDesc?: string;
      minVoltage: string;
      minVoltageResult?: string;
      minVoltageDesc?: string;
      maxTemperature: string;
      maxTemperatureResult?: string;
      maxTemperatureDesc?: string;
      minTemperature: string;
      minTemperatureResult?: string;
      minTemperatureDesc?: string;
      diffTemperature: string;
      diffTemperatureResult?: string;
      diffTemperatureDesc?: string;
      batteryBalance: "LOW" | "MIDDLE" | "HIGH";
      diffVoltage: string;
      diffVoltageResult?: string;
      diffVoltageDesc?: string;
      chargePositive: string;
      chargePositiveResult?: string;
      chargeNegative: string;
      chargeNegativeResult?: string;
      chargePositiveDesc?: string;
      nochargePositive: string;
      nochargePositiveResult?: string;
      nochargeNegative: string;
      nochargeNegativeResult?: string;
      nochargePositiveDesc?: string;
      status?: "CREATING" | "WAITING" | "MAINTAINING" | "REPARING" | "PENDING" | "PASSED";
    };
  }
  export interface CreateRecordRequest {
    body: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    };
  }
  export interface CreateRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListRecordsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      ticket_like?: string;
    };
  }
  export interface ListRecordsResponse {
    content?: ({
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface GetRecordRequest {
    recordId: string;
  }
  export interface GetRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateRecordRequest {
    recordId: string;
    body: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    };
  }
  export interface UpdateRecordResponse {
    content?: {
      /**
       * 关联工单 id
       */
      ticket?: string;
      /**
       * 操作记录简介
       */
      title?: string;
      /**
       * 操作记录详情
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteRecordRequest {
    recordId: string;
  }
}

export = SDK;
