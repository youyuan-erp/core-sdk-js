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
     * Create a vehicle record
     */
    createVehicleRecord(req: CreateVehicleRecordRequest): Promise<CreateVehicleRecordResponse>;
    /**
     * Update vehicle
     */
    updateVehicleRecord(req: UpdateVehicleRecordRequest): Promise<UpdateVehicleRecordResponse>;
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
    updateRepairRecord(req: UpdateRepairRecordRequest): Promise<UpdateRepairRecordResponse>;
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
       * 关联资源 id
       */
      resource?: string;
      /**
       * 草稿箱内容
       */
      content?: string;
      /**
       * 创建用户id
       */
      createBy?: string;
    } & {
      createBy: string;
    };
  }
  export interface CreateDraftResponse {
    content?: {
      /**
       * 关联资源 id
       */
      resource?: string;
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
      resource?: string;
      ns_like?: string;
      createBy?: string;
    };
  }
  export interface ListDaftsResponse {
    content?: ({
      /**
       * 关联资源 id
       */
      resource?: string;
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
       * 关联资源 id
       */
      resource?: string;
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
       * 关联资源 id
       */
      resource?: string;
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
       * 关联资源 id
       */
      resource?: string;
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
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
    };
  }
  export interface CreateVehicleResponse {
    content?: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
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
      id?: string;
      createAt_gte?: string;
      createAt_lte?: string;
      plate?: string;
      plate_like?: string;
      crm?: string;
      vin?: string;
      createBy?: string;
      ns_like?: string;
      num_like?: string;
      batteryNum_like?: string;
      scrapped?: boolean[];
      brands?: string | string[];
      terminal?: string | string[];
      park?: string | string[];
      status?: ("PENDING" | "PASSED" | "REJECTED") | ("PENDING" | "PASSED" | "REJECTED")[];
    };
  }
  export interface ListVehiclesResponse {
    content?: ({
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
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
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
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
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
    };
  }
  export interface UpdateVehicleResponse {
    content?: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
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
  export interface CreateVehicleRecordRequest {
    body: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      ticketNs: string;
      createBy: string;
    };
  }
  export interface CreateVehicleRecordResponse {
    content?: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateVehicleRecordRequest {
    vehicleId: string;
    body: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    };
  }
  export interface UpdateVehicleRecordResponse {
    content?: {
      /**
       * 车辆工单所属部门
       */
      ticketNs?: string;
      /**
       * 录入者
       */
      createBy?: string;
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
      [k: string]: any;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 车辆是否报废
       */
      scrapped?: boolean;
      /**
       * CRM 订单号
       */
      crm?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
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
    body: {
      /**
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      createBy: string;
      ticketNs: string;
      vehicle: string;
      assignee: string;
      assignAt: Date;
    };
  }
  export interface CreateRepairResponse {
    content?: {
      /**
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
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
      id?: string;
      status?:
        | ("CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED")
        | ("CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED")[];
      createAt_gte?: Date;
      createAt_lte?: Date;
      assignee?: string;
      vehiclePlate_like?: string;
      crm_like?: string;
      vehicleVin_like?: string;
      ticketNs?: string;
      ticketNs_like?: string;
      collaborators?: string;
      participant?: string;
      vehicleBrands?: string | string[];
      vehicleTerminal?: string | string[];
      vehicleScrapped?: boolean | boolean[];
    };
  }
  export interface ListRepairsResponse {
    content?: ({
      /**
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
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
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
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
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
    };
  }
  export interface UpdateRepairResponse {
    content?: {
      /**
       * 创建者
       */
      createBy?: string;
      /**
       * 维修单所属部门
       */
      ticketNs?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
      /**
       * 曾经是否超时
       */
      resubmitTimedOut?: boolean;
      /**
       * 驳回后再次提交审核的截止日期
       */
      resubmitDeadline?: Date;
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
      vehiclePlate?: string;
      /**
       * 关联车辆vin码
       */
      vehicleVin?: string;
      /**
       * 关联车辆自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆终端用户
       */
      vehicleTerminal?: string;
      /**
       * 关联车辆停保场
       */
      vehiclePark?: string;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 故障地点
       */
      address?: string;
      /**
       * 报修人姓名
       */
      reporter?: string;
      /**
       * 报修时间
       */
      reportAt?: Date;
      /**
       * 报修人联系方式
       */
      reporterPhone?: string;
      /**
       * 报修人职称
       */
      reporterPosition?: string;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维修单id
       */
      maintain?: string;
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
        /**
         * 车辆里程数
         */
        mileages?: number;
        /**
         * 容量数据
         */
        soc?: string;
        /**
         * 签到地址
         */
        signAddress?: string;
        /**
         * 到场时间
         */
        arrivalAt?: Date;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 工时
         */
        workHours?: number;
        /**
         * 失效原因
         */
        failReason?: string;
        /**
         * 处理方式
         */
        processMethod?: string;
        /**
         * 故障属性
         */
        faultAttr?: string;
        /**
         * 故障模式分类
         */
        faultMode?: string;
        /**
         * 备件
         */
        backups?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 物料号
           */
          itemNo?: string;
          /**
           * 物料名称
           */
          name?: string;
          /**
           * 物流编号
           */
          flowNo?: string;
          /**
           * 物流费
           */
          flowPrice?: number;
          /**
           * 单价
           */
          unitPrice?: number;
          /**
           * 数量
           */
          quantity?: number;
          /**
           * 是否收费
           */
          free?: boolean;
          /**
           * 新件barcode
           */
          newBarcode?: string;
          /**
           * 旧件barcode
           */
          oldBarcode?: string;
        }[];
        /**
         * 客户的故障描述
         */
        clientDesc?: string;
        /**
         * 客户反馈
         */
        clientOrigin?: string;
        /**
         * 己方的故障描述, 检查过程
         */
        ownDesc?: string;
        /**
         * 现场图片
         */
        livePic?: {
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
         * 处理结果描述
         */
        resultDesc?: string;
        /**
         * 上位机图片
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
         * 车头正面图片
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
         * 整车铭牌图片
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
         * 仪表图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 采集数据文件
         */
        dataFile?: {
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
         * 其他花费
         */
        otherCost?: number;
        /**
         * 备注
         */
        remark?: string;
        /**
         * bmu软件版本
         */
        bmuSoftware?: string;
        /**
         * csc软件版本
         */
        cscSoftware?: string;
        /**
         * 审核通过后是否同步软件信息到车辆
         */
        syncSoftware?: boolean;
        workers?: {
          /**
           * id
           */
          _id?: string;
          /**
           * 关联 user id
           */
          user?: string;
          /**
           * 出工里程
           */
          mileages?: number;
          /**
           * 工作量
           */
          workload?: number;
          /**
           * 线路图
           */
          linePic?: {
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
          };
        }[];
      };
      /**
       * 共同出工人id数组
       */
      collaborators?: string[];
      /**
       * 暂停原因
       */
      pauseReason?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
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
  export interface UpdateRepairRecordRequest {
    repairId: string;
    body: {
      /**
       * 车辆里程数
       */
      mileages?: number;
      /**
       * 容量数据
       */
      soc?: string;
      /**
       * 签到地址
       */
      signAddress?: string;
      /**
       * 到场时间
       */
      arrivalAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 故障元件
       */
      faultCells?: string[];
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 失效原因
       */
      failReason?: string;
      /**
       * 处理方式
       */
      processMethod?: string;
      /**
       * 故障属性
       */
      faultAttr?: string;
      /**
       * 故障模式分类
       */
      faultMode?: string;
      /**
       * 备件
       */
      backups?: {
        /**
         * id
         */
        _id?: string;
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 物料名称
         */
        name?: string;
        /**
         * 物流编号
         */
        flowNo?: string;
        /**
         * 物流费
         */
        flowPrice?: number;
        /**
         * 单价
         */
        unitPrice?: number;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
        /**
         * 新件barcode
         */
        newBarcode?: string;
        /**
         * 旧件barcode
         */
        oldBarcode?: string;
      }[];
      /**
       * 客户的故障描述
       */
      clientDesc?: string;
      /**
       * 客户反馈
       */
      clientOrigin?: string;
      /**
       * 己方的故障描述, 检查过程
       */
      ownDesc?: string;
      /**
       * 现场图片
       */
      livePic?: {
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
       * 处理结果描述
       */
      resultDesc?: string;
      /**
       * 上位机图片
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
       * 车头正面图片
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
       * 整车铭牌图片
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
       * 仪表图片
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
       * 采集数据文件
       */
      dataFile?: {
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
       * 其他花费
       */
      otherCost?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * bmu软件版本
       */
      bmuSoftware?: string;
      /**
       * csc软件版本
       */
      cscSoftware?: string;
      /**
       * 审核通过后是否同步软件信息到车辆
       */
      syncSoftware?: boolean;
      workers?: {
        /**
         * id
         */
        _id?: string;
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: number;
        /**
         * 工作量
         */
        workload?: number;
        /**
         * 线路图
         */
        linePic?: {
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
        };
      }[];
    } & {
      collaborators?: string[];
    };
  }
  export interface UpdateRepairRecordResponse {
    /**
     * 维修单维修记录
     */
    content?: {
      /**
       * 车辆里程数
       */
      mileages?: number;
      /**
       * 容量数据
       */
      soc?: string;
      /**
       * 签到地址
       */
      signAddress?: string;
      /**
       * 到场时间
       */
      arrivalAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 故障元件
       */
      faultCells?: string[];
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 失效原因
       */
      failReason?: string;
      /**
       * 处理方式
       */
      processMethod?: string;
      /**
       * 故障属性
       */
      faultAttr?: string;
      /**
       * 故障模式分类
       */
      faultMode?: string;
      /**
       * 备件
       */
      backups?: {
        /**
         * id
         */
        _id?: string;
        /**
         * 物料号
         */
        itemNo?: string;
        /**
         * 物料名称
         */
        name?: string;
        /**
         * 物流编号
         */
        flowNo?: string;
        /**
         * 物流费
         */
        flowPrice?: number;
        /**
         * 单价
         */
        unitPrice?: number;
        /**
         * 数量
         */
        quantity?: number;
        /**
         * 是否收费
         */
        free?: boolean;
        /**
         * 新件barcode
         */
        newBarcode?: string;
        /**
         * 旧件barcode
         */
        oldBarcode?: string;
      }[];
      /**
       * 客户的故障描述
       */
      clientDesc?: string;
      /**
       * 客户反馈
       */
      clientOrigin?: string;
      /**
       * 己方的故障描述, 检查过程
       */
      ownDesc?: string;
      /**
       * 现场图片
       */
      livePic?: {
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
       * 处理结果描述
       */
      resultDesc?: string;
      /**
       * 上位机图片
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
       * 车头正面图片
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
       * 整车铭牌图片
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
       * 仪表图片
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
       * 采集数据文件
       */
      dataFile?: {
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
       * 其他花费
       */
      otherCost?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * bmu软件版本
       */
      bmuSoftware?: string;
      /**
       * csc软件版本
       */
      cscSoftware?: string;
      /**
       * 审核通过后是否同步软件信息到车辆
       */
      syncSoftware?: boolean;
      workers?: {
        /**
         * id
         */
        _id?: string;
        /**
         * 关联 user id
         */
        user?: string;
        /**
         * 出工里程
         */
        mileages?: number;
        /**
         * 工作量
         */
        workload?: number;
        /**
         * 线路图
         */
        linePic?: {
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
        };
      }[];
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      id?: string;
      status?:
        | ("CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED")
        | ("CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED")[];
      createAt_gte?: Date;
      createAt_lte?: Date;
      vehiclePlate_like?: string;
      crm_like?: string;
      vehicleVin_like?: string;
      vehicleVin?: string;
      appearance?: string;
      software?: string;
      participant?: string;
      vehicleBrands?: string | string[];
      vehicleTerminal?: string | string[];
      vehiclePark?: string | string[];
      vehicleScrapped?: boolean | boolean[];
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      status?: "CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED";
      /**
       * 外观检查组ns
       */
      appearance?: string;
      /**
       * 软件诊断组ns
       */
      software?: string;
      /**
       * 工单曾经被驳回
       */
      rejected?: boolean;
      /**
       * 驳回时间
       */
      rejectAt?: Date;
      /**
       * 驳回时间
       */
      rejectReason?: string;
      /**
       * 驳回人
       */
      rejectBy?: string;
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
      vehicleTerminal?: string;
      /**
       * 关联车辆 自编号
       */
      vehicleNo?: string;
      /**
       * 关联车辆 车牌号
       */
      vehiclePlate?: string;
      /**
       * 关联车辆 vin
       */
      vehicleVin?: string;
      /**
       * 关联车辆 整车品牌
       */
      vehicleBrands?: string;
      /**
       * 关联车辆 停保场地址
       */
      vehiclePark?: string;
      /**
       * 关联车辆 CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆 电池pn
       */
      vehicleBatteryPn?: string;
      /**
       * 关联车辆 电池号
       */
      vehicleBatteryNo?: string;
      /**
       * 关联车辆 运营日期
       */
      vehicleOperateAt?: Date;
      /**
       * 关联车辆是否退役
       */
      vehicleScrapped?: boolean;
      /**
       * 维保单外观诊断记录
       */
      appearanceRecord?: {
        /**
         * 车辆里程
         */
        mileages?: number;
        signAddress?: string;
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 仪表电池报警信息
         */
        meterAlarm?: boolean;
        /**
         * 仪表电池报警信息现场是否解决
         */
        meterAlarmResult?: boolean;
        /**
         * 仪表电池报警信息异常描述及现场处理
         */
        meterAlarmDesc?: string;
        /**
         * 箱体外壳损毁、变形
         */
        boxDamage?: boolean;
        /**
         * 箱体外壳损毁、变形现场是否解决
         */
        boxDamageResult?: boolean;
        /**
         * 箱体外壳损毁、变形异常描述及现场处理
         */
        boxDamageDesc?: string;
        /**
         * 电箱漏液
         */
        electricLeakage?: boolean;
        /**
         * 电箱漏液现场是否解决
         */
        electricLeakageResult?: boolean;
        /**
         * 电箱漏液异常描述及现场处理
         */
        electricLeakageDesc?: string;
        /**
         * 气压平衡阀或防暴阀松动
         */
        valveLoose?: boolean;
        /**
         * 气压平衡阀或防暴阀松动现场是否解决
         */
        valveLooseResult?: boolean;
        /**
         * 气压平衡阀或防暴阀松动异常描述及现场处理
         */
        valveLooseDesc?: string;
        /**
         * 高压端子外盖检查异常
         */
        coverAbnormal?: boolean;
        /**
         * 高压端子外盖检查异常现场是否解决
         */
        coverAbnormalResult?: boolean;
        /**
         * 高压端子外盖检查异常异常描述及现场处理
         */
        coverAbnormalDesc?: string;
        /**
         * 格兰头松动
         */
        headLoose?: boolean;
        /**
         * 格兰头松动现场是否解决
         */
        headLooseResult?: boolean;
        /**
         * 格兰头松动异常描述及现场处理
         */
        headLooseDesc?: string;
        /**
         * 快断器螺栓松动
         */
        boltLoose?: boolean;
        /**
         * 快断器螺栓松动现场是否解决
         */
        boltLooseResult?: boolean;
        /**
         * 快断器螺栓松动异常描述及现场处理
         */
        boltLooseDesc?: string;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常
         */
        msdAbnormal?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
         */
        msdAbnormalResult?: boolean;
        /**
         * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
         */
        msdAbnormalDesc?: string;
        /**
         * 高压线束磨损或磨损风险
         */
        hvWireWear?: boolean;
        /**
         * 高压线束磨损或磨损风险现场是否解决
         */
        hvWireWearResult?: boolean;
        /**
         * 高压线束磨损或磨损风险异常描述及现场处理
         */
        hvWireWearDesc?: string;
        /**
         * 低压线束磨损或磨损风险
         */
        lvWireWear?: boolean;
        /**
         * 低压线束磨损或磨损风险现场是否解决
         */
        lvWireWearResult?: boolean;
        /**
         * 低压线束磨损或磨损风险异常描述及现场处理
         */
        lvWireWearDesc?: string;
        /**
         * 高压接插件不紧固
         */
        hvConnectorFasten?: boolean;
        /**
         * 高压接插件不紧固现场是否解决
         */
        hvConnectorFastenResult?: boolean;
        /**
         * 高压接插件不紧固异常描述及现场处理
         */
        hvConnectorFastenDesc?: string;
        /**
         * 低压接插件不紧固
         */
        lvConnectorFasten?: boolean;
        /**
         * 低压接插件不紧固现场是否解决
         */
        lvConnectorFastenResult?: boolean;
        /**
         * 低压接插件不紧固异常描述及现场处理
         */
        lvConnectorFastenDesc?: string;
        /**
         * 车牌（车头照）
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
         * 整车铭牌图片
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
         * 故障部位图片
         */
        faultPic?: {
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
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
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
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
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
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
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
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: string;
      };
      /**
       * 维保单软件诊断记录
       */
      softwareRecord?: {
        /**
         * 软件诊断组签到地址
         */
        signAddress?: string;
        /**
         * 路线图
         */
        routeMap?: {
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
         * 软件诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 软件诊断组实际出工人
         */
        workers?: string[];
        /**
         * 上位机软件截图-开始图片
         */
        startPic?: {
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
         * 上位机软件截图-最后图片
         */
        endPic?: {
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
         * SOH测量值
         */
        soh?: number;
        /**
         * SOH测量值现场修复后
         */
        sohResult?: number;
        /**
         * SOH测量值异常描述及现场处理
         */
        sohDesc?: string;
        /**
         * 静态上位机电流
         */
        current?: number;
        /**
         * 静态上位机电流现场修复后
         */
        currentResult?: number;
        /**
         * 静态上位机电流异常描述及现场处理
         */
        currentDesc?: string;
        /**
         * soc
         */
        soc?: number;
        /**
         * soc现场修复后
         */
        socResult?: number;
        /**
         * roc
         */
        roc?: number;
        /**
         * roc现场修复后
         */
        rocResult?: number;
        /**
         * soc异常描述及现场处理
         */
        socDesc?: string;
        /**
         * 累加电压
         */
        addVoltage?: number;
        /**
         * 累加电压现场修复后
         */
        addVoltageResult?: number;
        /**
         * 内侧总电压
         */
        totalVoltage?: number;
        /**
         * 内侧总电压现场修复后
         */
        totalVoltageResult?: number;
        /**
         * 累加电压异常描述及现场处理
         */
        addVoltageDesc?: string;
        /**
         * 最大单体电压Vmax
         */
        maxVoltage?: number;
        /**
         * 最大单体电压Vmax现场修复后
         */
        maxVoltageResult?: number;
        /**
         * 最大单体电压Vmax异常描述及现场处理
         */
        maxVoltageDesc?: string;
        /**
         * 最小单体电压Vmin
         */
        minVoltage?: number;
        /**
         * 最小单体电压Vmin现场修复后
         */
        minVoltageResult?: number;
        /**
         * 最小单体电压Vmin异常描述及现场处理
         */
        minVoltageDesc?: string;
        /**
         * 最大单体温度Tmax
         */
        maxTemperature?: number;
        /**
         * 最大单体温度Tmax现场修复后
         */
        maxTemperatureResult?: number;
        /**
         * 最大单体温度Tmax异常描述及现场处理
         */
        maxTemperatureDesc?: string;
        /**
         * 最小单体温度Tmin
         */
        minTemperature?: number;
        /**
         * 最小单体温度Tmin现场修复后
         */
        minTemperatureResult?: number;
        /**
         * 最小单体温度Tmin异常描述及现场处理
         */
        minTemperatureDesc?: string;
        /**
         * 静态模组温差ΔT
         */
        diffTemperature?: number;
        /**
         * 静态模组温差ΔT现场修复后
         */
        diffTemperatureResult?: number;
        /**
         * 静态模组温差ΔT异常描述及现场处理
         */
        diffTemperatureDesc?: string;
        /**
         * 单体压差ΔU
         */
        diffVoltage?: number;
        /**
         * 单体压差ΔU现场修复后
         */
        diffVoltageResult?: number;
        /**
         * 单体压差ΔU异常描述及现场处理
         */
        diffVoltageDesc?: string;
        /**
         * 绝缘阻值（充电）正极
         */
        chargePositive?: number;
        /**
         * 绝缘阻值（充电）正极现场修复后
         */
        chargePositiveResult?: number;
        /**
         * 绝缘阻值（充电）异常及现场处理
         */
        chargePositiveDesc?: string;
        /**
         * 绝缘阻值（充电）负极
         */
        chargeNegative?: number;
        /**
         * 绝缘阻值（充电）负极现场修复后
         */
        chargeNegativeResult?: number;
        /**
         * 绝缘阻值（充电）异常描述及现场处理
         */
        chargeNegativeDesc?: string;
        /**
         * 绝缘阻值（非充电）正极
         */
        nochargePositive?: number;
        /**
         * 绝缘阻值（非充电）正极现场修复后
         */
        nochargePositiveResult?: number;
        /**
         * 绝缘阻值（非充电）正极异常及现场处理
         */
        nochargePositiveDesc?: string;
        /**
         * 绝缘阻值（非充电）负极
         */
        nochargeNegative?: number;
        /**
         * 绝缘阻值（非充电）负极现场修复后
         */
        nochargeNegativeResult?: number;
        /**
         * 绝缘阻值（非充电）负极异常及现场处理
         */
        nochargeNegativeDesc?: string;
        /**
         * 提交时间
         */
        submitAt?: Date;
        /**
         * 提交人
         */
        submitBy?: Date;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
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
      /**
       * 车辆里程
       */
      mileages?: number;
      signAddress?: string;
      arrivalAt?: Date;
      /**
       * 路线图
       */
      routeMap?: {
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
       * 外观检查组实际出工人
       */
      workers?: string[];
      /**
       * 仪表电池报警信息
       */
      meterAlarm?: boolean;
      /**
       * 仪表电池报警信息现场是否解决
       */
      meterAlarmResult?: boolean;
      /**
       * 仪表电池报警信息异常描述及现场处理
       */
      meterAlarmDesc?: string;
      /**
       * 箱体外壳损毁、变形
       */
      boxDamage?: boolean;
      /**
       * 箱体外壳损毁、变形现场是否解决
       */
      boxDamageResult?: boolean;
      /**
       * 箱体外壳损毁、变形异常描述及现场处理
       */
      boxDamageDesc?: string;
      /**
       * 电箱漏液
       */
      electricLeakage?: boolean;
      /**
       * 电箱漏液现场是否解决
       */
      electricLeakageResult?: boolean;
      /**
       * 电箱漏液异常描述及现场处理
       */
      electricLeakageDesc?: string;
      /**
       * 气压平衡阀或防暴阀松动
       */
      valveLoose?: boolean;
      /**
       * 气压平衡阀或防暴阀松动现场是否解决
       */
      valveLooseResult?: boolean;
      /**
       * 气压平衡阀或防暴阀松动异常描述及现场处理
       */
      valveLooseDesc?: string;
      /**
       * 高压端子外盖检查异常
       */
      coverAbnormal?: boolean;
      /**
       * 高压端子外盖检查异常现场是否解决
       */
      coverAbnormalResult?: boolean;
      /**
       * 高压端子外盖检查异常异常描述及现场处理
       */
      coverAbnormalDesc?: string;
      /**
       * 格兰头松动
       */
      headLoose?: boolean;
      /**
       * 格兰头松动现场是否解决
       */
      headLooseResult?: boolean;
      /**
       * 格兰头松动异常描述及现场处理
       */
      headLooseDesc?: string;
      /**
       * 快断器螺栓松动
       */
      boltLoose?: boolean;
      /**
       * 快断器螺栓松动现场是否解决
       */
      boltLooseResult?: boolean;
      /**
       * 快断器螺栓松动异常描述及现场处理
       */
      boltLooseDesc?: string;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常
       */
      msdAbnormal?: boolean;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
       */
      msdAbnormalResult?: boolean;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
       */
      msdAbnormalDesc?: string;
      /**
       * 高压线束磨损或磨损风险
       */
      hvWireWear?: boolean;
      /**
       * 高压线束磨损或磨损风险现场是否解决
       */
      hvWireWearResult?: boolean;
      /**
       * 高压线束磨损或磨损风险异常描述及现场处理
       */
      hvWireWearDesc?: string;
      /**
       * 低压线束磨损或磨损风险
       */
      lvWireWear?: boolean;
      /**
       * 低压线束磨损或磨损风险现场是否解决
       */
      lvWireWearResult?: boolean;
      /**
       * 低压线束磨损或磨损风险异常描述及现场处理
       */
      lvWireWearDesc?: string;
      /**
       * 高压接插件不紧固
       */
      hvConnectorFasten?: boolean;
      /**
       * 高压接插件不紧固现场是否解决
       */
      hvConnectorFastenResult?: boolean;
      /**
       * 高压接插件不紧固异常描述及现场处理
       */
      hvConnectorFastenDesc?: string;
      /**
       * 低压接插件不紧固
       */
      lvConnectorFasten?: boolean;
      /**
       * 低压接插件不紧固现场是否解决
       */
      lvConnectorFastenResult?: boolean;
      /**
       * 低压接插件不紧固异常描述及现场处理
       */
      lvConnectorFastenDesc?: string;
      /**
       * 车牌（车头照）
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
       * 整车铭牌图片
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
    };
  }
  export interface UpdateAppearanceRecordResponse {
    /**
     * 维保单外观诊断记录
     */
    content?: {
      /**
       * 车辆里程
       */
      mileages?: number;
      signAddress?: string;
      arrivalAt?: Date;
      /**
       * 路线图
       */
      routeMap?: {
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
       * 外观检查组实际出工人
       */
      workers?: string[];
      /**
       * 仪表电池报警信息
       */
      meterAlarm?: boolean;
      /**
       * 仪表电池报警信息现场是否解决
       */
      meterAlarmResult?: boolean;
      /**
       * 仪表电池报警信息异常描述及现场处理
       */
      meterAlarmDesc?: string;
      /**
       * 箱体外壳损毁、变形
       */
      boxDamage?: boolean;
      /**
       * 箱体外壳损毁、变形现场是否解决
       */
      boxDamageResult?: boolean;
      /**
       * 箱体外壳损毁、变形异常描述及现场处理
       */
      boxDamageDesc?: string;
      /**
       * 电箱漏液
       */
      electricLeakage?: boolean;
      /**
       * 电箱漏液现场是否解决
       */
      electricLeakageResult?: boolean;
      /**
       * 电箱漏液异常描述及现场处理
       */
      electricLeakageDesc?: string;
      /**
       * 气压平衡阀或防暴阀松动
       */
      valveLoose?: boolean;
      /**
       * 气压平衡阀或防暴阀松动现场是否解决
       */
      valveLooseResult?: boolean;
      /**
       * 气压平衡阀或防暴阀松动异常描述及现场处理
       */
      valveLooseDesc?: string;
      /**
       * 高压端子外盖检查异常
       */
      coverAbnormal?: boolean;
      /**
       * 高压端子外盖检查异常现场是否解决
       */
      coverAbnormalResult?: boolean;
      /**
       * 高压端子外盖检查异常异常描述及现场处理
       */
      coverAbnormalDesc?: string;
      /**
       * 格兰头松动
       */
      headLoose?: boolean;
      /**
       * 格兰头松动现场是否解决
       */
      headLooseResult?: boolean;
      /**
       * 格兰头松动异常描述及现场处理
       */
      headLooseDesc?: string;
      /**
       * 快断器螺栓松动
       */
      boltLoose?: boolean;
      /**
       * 快断器螺栓松动现场是否解决
       */
      boltLooseResult?: boolean;
      /**
       * 快断器螺栓松动异常描述及现场处理
       */
      boltLooseDesc?: string;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常
       */
      msdAbnormal?: boolean;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常现场是否解决
       */
      msdAbnormalResult?: boolean;
      /**
       * 高压盒MSD（扭力抽检时电箱MSD）异常异常描述及现场处理
       */
      msdAbnormalDesc?: string;
      /**
       * 高压线束磨损或磨损风险
       */
      hvWireWear?: boolean;
      /**
       * 高压线束磨损或磨损风险现场是否解决
       */
      hvWireWearResult?: boolean;
      /**
       * 高压线束磨损或磨损风险异常描述及现场处理
       */
      hvWireWearDesc?: string;
      /**
       * 低压线束磨损或磨损风险
       */
      lvWireWear?: boolean;
      /**
       * 低压线束磨损或磨损风险现场是否解决
       */
      lvWireWearResult?: boolean;
      /**
       * 低压线束磨损或磨损风险异常描述及现场处理
       */
      lvWireWearDesc?: string;
      /**
       * 高压接插件不紧固
       */
      hvConnectorFasten?: boolean;
      /**
       * 高压接插件不紧固现场是否解决
       */
      hvConnectorFastenResult?: boolean;
      /**
       * 高压接插件不紧固异常描述及现场处理
       */
      hvConnectorFastenDesc?: string;
      /**
       * 低压接插件不紧固
       */
      lvConnectorFasten?: boolean;
      /**
       * 低压接插件不紧固现场是否解决
       */
      lvConnectorFastenResult?: boolean;
      /**
       * 低压接插件不紧固异常描述及现场处理
       */
      lvConnectorFastenDesc?: string;
      /**
       * 车牌（车头照）
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
       * 整车铭牌图片
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
       * 故障部位图片
       */
      faultPic?: {
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
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
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
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
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
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
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
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
    };
  }
  export interface UpdateSoftwareRecordRequest {
    maintainId: string;
    /**
     * 维保单软件诊断记录
     */
    body: {
      /**
       * 软件诊断组签到地址
       */
      signAddress?: string;
      /**
       * 路线图
       */
      routeMap?: {
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
       * 软件诊断组到场时间
       */
      arrivalAt?: Date;
      /**
       * 软件诊断组实际出工人
       */
      workers?: string[];
      /**
       * 上位机软件截图-开始图片
       */
      startPic?: {
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
       * 上位机软件截图-最后图片
       */
      endPic?: {
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
       * SOH测量值
       */
      soh?: number;
      /**
       * SOH测量值现场修复后
       */
      sohResult?: number;
      /**
       * SOH测量值异常描述及现场处理
       */
      sohDesc?: string;
      /**
       * 静态上位机电流
       */
      current?: number;
      /**
       * 静态上位机电流现场修复后
       */
      currentResult?: number;
      /**
       * 静态上位机电流异常描述及现场处理
       */
      currentDesc?: string;
      /**
       * soc
       */
      soc?: number;
      /**
       * soc现场修复后
       */
      socResult?: number;
      /**
       * roc
       */
      roc?: number;
      /**
       * roc现场修复后
       */
      rocResult?: number;
      /**
       * soc异常描述及现场处理
       */
      socDesc?: string;
      /**
       * 累加电压
       */
      addVoltage?: number;
      /**
       * 累加电压现场修复后
       */
      addVoltageResult?: number;
      /**
       * 内侧总电压
       */
      totalVoltage?: number;
      /**
       * 内侧总电压现场修复后
       */
      totalVoltageResult?: number;
      /**
       * 累加电压异常描述及现场处理
       */
      addVoltageDesc?: string;
      /**
       * 最大单体电压Vmax
       */
      maxVoltage?: number;
      /**
       * 最大单体电压Vmax现场修复后
       */
      maxVoltageResult?: number;
      /**
       * 最大单体电压Vmax异常描述及现场处理
       */
      maxVoltageDesc?: string;
      /**
       * 最小单体电压Vmin
       */
      minVoltage?: number;
      /**
       * 最小单体电压Vmin现场修复后
       */
      minVoltageResult?: number;
      /**
       * 最小单体电压Vmin异常描述及现场处理
       */
      minVoltageDesc?: string;
      /**
       * 最大单体温度Tmax
       */
      maxTemperature?: number;
      /**
       * 最大单体温度Tmax现场修复后
       */
      maxTemperatureResult?: number;
      /**
       * 最大单体温度Tmax异常描述及现场处理
       */
      maxTemperatureDesc?: string;
      /**
       * 最小单体温度Tmin
       */
      minTemperature?: number;
      /**
       * 最小单体温度Tmin现场修复后
       */
      minTemperatureResult?: number;
      /**
       * 最小单体温度Tmin异常描述及现场处理
       */
      minTemperatureDesc?: string;
      /**
       * 静态模组温差ΔT
       */
      diffTemperature?: number;
      /**
       * 静态模组温差ΔT现场修复后
       */
      diffTemperatureResult?: number;
      /**
       * 静态模组温差ΔT异常描述及现场处理
       */
      diffTemperatureDesc?: string;
      /**
       * 单体压差ΔU
       */
      diffVoltage?: number;
      /**
       * 单体压差ΔU现场修复后
       */
      diffVoltageResult?: number;
      /**
       * 单体压差ΔU异常描述及现场处理
       */
      diffVoltageDesc?: string;
      /**
       * 绝缘阻值（充电）正极
       */
      chargePositive?: number;
      /**
       * 绝缘阻值（充电）正极现场修复后
       */
      chargePositiveResult?: number;
      /**
       * 绝缘阻值（充电）异常及现场处理
       */
      chargePositiveDesc?: string;
      /**
       * 绝缘阻值（充电）负极
       */
      chargeNegative?: number;
      /**
       * 绝缘阻值（充电）负极现场修复后
       */
      chargeNegativeResult?: number;
      /**
       * 绝缘阻值（充电）异常描述及现场处理
       */
      chargeNegativeDesc?: string;
      /**
       * 绝缘阻值（非充电）正极
       */
      nochargePositive?: number;
      /**
       * 绝缘阻值（非充电）正极现场修复后
       */
      nochargePositiveResult?: number;
      /**
       * 绝缘阻值（非充电）正极异常及现场处理
       */
      nochargePositiveDesc?: string;
      /**
       * 绝缘阻值（非充电）负极
       */
      nochargeNegative?: number;
      /**
       * 绝缘阻值（非充电）负极现场修复后
       */
      nochargeNegativeResult?: number;
      /**
       * 绝缘阻值（非充电）负极异常及现场处理
       */
      nochargeNegativeDesc?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: Date;
    };
  }
  export interface UpdateSoftwareRecordResponse {
    /**
     * 维保单软件诊断记录
     */
    content?: {
      /**
       * 软件诊断组签到地址
       */
      signAddress?: string;
      /**
       * 路线图
       */
      routeMap?: {
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
       * 软件诊断组到场时间
       */
      arrivalAt?: Date;
      /**
       * 软件诊断组实际出工人
       */
      workers?: string[];
      /**
       * 上位机软件截图-开始图片
       */
      startPic?: {
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
       * 上位机软件截图-最后图片
       */
      endPic?: {
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
       * SOH测量值
       */
      soh?: number;
      /**
       * SOH测量值现场修复后
       */
      sohResult?: number;
      /**
       * SOH测量值异常描述及现场处理
       */
      sohDesc?: string;
      /**
       * 静态上位机电流
       */
      current?: number;
      /**
       * 静态上位机电流现场修复后
       */
      currentResult?: number;
      /**
       * 静态上位机电流异常描述及现场处理
       */
      currentDesc?: string;
      /**
       * soc
       */
      soc?: number;
      /**
       * soc现场修复后
       */
      socResult?: number;
      /**
       * roc
       */
      roc?: number;
      /**
       * roc现场修复后
       */
      rocResult?: number;
      /**
       * soc异常描述及现场处理
       */
      socDesc?: string;
      /**
       * 累加电压
       */
      addVoltage?: number;
      /**
       * 累加电压现场修复后
       */
      addVoltageResult?: number;
      /**
       * 内侧总电压
       */
      totalVoltage?: number;
      /**
       * 内侧总电压现场修复后
       */
      totalVoltageResult?: number;
      /**
       * 累加电压异常描述及现场处理
       */
      addVoltageDesc?: string;
      /**
       * 最大单体电压Vmax
       */
      maxVoltage?: number;
      /**
       * 最大单体电压Vmax现场修复后
       */
      maxVoltageResult?: number;
      /**
       * 最大单体电压Vmax异常描述及现场处理
       */
      maxVoltageDesc?: string;
      /**
       * 最小单体电压Vmin
       */
      minVoltage?: number;
      /**
       * 最小单体电压Vmin现场修复后
       */
      minVoltageResult?: number;
      /**
       * 最小单体电压Vmin异常描述及现场处理
       */
      minVoltageDesc?: string;
      /**
       * 最大单体温度Tmax
       */
      maxTemperature?: number;
      /**
       * 最大单体温度Tmax现场修复后
       */
      maxTemperatureResult?: number;
      /**
       * 最大单体温度Tmax异常描述及现场处理
       */
      maxTemperatureDesc?: string;
      /**
       * 最小单体温度Tmin
       */
      minTemperature?: number;
      /**
       * 最小单体温度Tmin现场修复后
       */
      minTemperatureResult?: number;
      /**
       * 最小单体温度Tmin异常描述及现场处理
       */
      minTemperatureDesc?: string;
      /**
       * 静态模组温差ΔT
       */
      diffTemperature?: number;
      /**
       * 静态模组温差ΔT现场修复后
       */
      diffTemperatureResult?: number;
      /**
       * 静态模组温差ΔT异常描述及现场处理
       */
      diffTemperatureDesc?: string;
      /**
       * 单体压差ΔU
       */
      diffVoltage?: number;
      /**
       * 单体压差ΔU现场修复后
       */
      diffVoltageResult?: number;
      /**
       * 单体压差ΔU异常描述及现场处理
       */
      diffVoltageDesc?: string;
      /**
       * 绝缘阻值（充电）正极
       */
      chargePositive?: number;
      /**
       * 绝缘阻值（充电）正极现场修复后
       */
      chargePositiveResult?: number;
      /**
       * 绝缘阻值（充电）异常及现场处理
       */
      chargePositiveDesc?: string;
      /**
       * 绝缘阻值（充电）负极
       */
      chargeNegative?: number;
      /**
       * 绝缘阻值（充电）负极现场修复后
       */
      chargeNegativeResult?: number;
      /**
       * 绝缘阻值（充电）异常描述及现场处理
       */
      chargeNegativeDesc?: string;
      /**
       * 绝缘阻值（非充电）正极
       */
      nochargePositive?: number;
      /**
       * 绝缘阻值（非充电）正极现场修复后
       */
      nochargePositiveResult?: number;
      /**
       * 绝缘阻值（非充电）正极异常及现场处理
       */
      nochargePositiveDesc?: string;
      /**
       * 绝缘阻值（非充电）负极
       */
      nochargeNegative?: number;
      /**
       * 绝缘阻值（非充电）负极现场修复后
       */
      nochargeNegativeResult?: number;
      /**
       * 绝缘阻值（非充电）负极异常及现场处理
       */
      nochargeNegativeDesc?: string;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: Date;
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
