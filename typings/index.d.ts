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
  notification: NotificationAPI;
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
     * 停止车辆维保
     */
    stopVehicleMaintain(req: StopVehicleMaintainRequest): Promise<StopVehicleMaintainResponse>;
    /**
     * 停止车辆维保
     */
    startVehicleMaintain(req: StartVehicleMaintainRequest): Promise<StartVehicleMaintainResponse>;
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
    /**
     * 统计-概览
     */
    summaryAll(req: SummaryAllRequest): Promise<SummaryAllResponse>;
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
    /**
     * 统计-维修单分布排序
     */
    summaryRepairsRank(req: SummaryRepairsRankRequest): Promise<SummaryRepairsRankResponse>;
    /**
     * 统计-维修单维修故障按月统计
     */
    summaryRepairsFaultByMonth(
      req: SummaryRepairsFaultByMonthRequest
    ): Promise<SummaryRepairsFaultByMonthResponse>;
    /**
     * 统计-关联维修单完成情况 按月
     */
    summaryRepairsMaintainByMonth(
      req: SummaryRepairsMaintainByMonthRequest
    ): Promise<SummaryRepairsMaintainByMonthResponse>;
    /**
     * 统计-维修组组内人员故障元件分布
     */
    summaryRepairsPersonFault(
      req: SummaryRepairsPersonFaultRequest
    ): Promise<SummaryRepairsPersonFaultResponse>;
    /**
     * 统计-维修组组内人员故障元件分布
     */
    summaryRepairsPersonEffect(
      req: SummaryRepairsPersonEffectRequest
    ): Promise<SummaryRepairsPersonEffectResponse>;
    /**
     * 统计-正在处理维修单的人员情况
     */
    summaryRepairsPersonState(
      req: SummaryRepairsPersonStateRequest
    ): Promise<SummaryRepairsPersonStateResponse>;
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
    /**
     * 统计-维保单完成情况 按月
     */
    summaryMaintainsByMonth(
      req: SummaryMaintainsByMonthRequest
    ): Promise<SummaryMaintainsByMonthResponse>;
    /**
     * 统计-按月维保单故障修复情况
     */
    summaryMaintainsFaultByMonth(
      req: SummaryMaintainsFaultByMonthRequest
    ): Promise<SummaryMaintainsFaultByMonthResponse>;
    /**
     * 统计-维保单故障按故障分类统计修复情况
     */
    summaryMaintainsFaultRank(
      req: SummaryMaintainsFaultRankRequest
    ): Promise<SummaryMaintainsFaultRankResponse>;
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
  export interface NotificationAPI {
    /**
     * Create a notification
     */
    createNotification(req: CreateNotificationRequest): Promise<CreateNotificationResponse>;
    /**
     * List all notifications
     */
    listNotifications(req: ListNotificationsRequest): Promise<ListNotificationsResponse>;
    /**
     * Find notification by id
     */
    getNotification(req: GetNotificationRequest): Promise<GetNotificationResponse>;
    /**
     * Update notification
     */
    updateNotification(req: UpdateNotificationRequest): Promise<UpdateNotificationResponse>;
    /**
     *
     */
    deleteNotification(req: DeleteNotificationRequest): Promise<DeleteNotificationResponse>;
    /**
     * update notification read
     */
    updateNotificationRead(
      req: UpdateNotificationReadRequest
    ): Promise<UpdateNotificationReadResponse>;
  }

  export interface CreateParkRequest {
    body: {
      /**
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
      terminal: string;
      appearance: string;
      software: string;
    };
  }
  export interface CreateParkResponse {
    content?: {
      /**
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
     * 停保场信息
     */
    body: {
      /**
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
       * 停保场名
       */
      name?: string;
      /**
       * 停保场地址
       */
      address?: string;
      /**
       * 终端用户
       */
      terminal?: string;
      /**
       * 终端用户简称
       */
      terminalShort?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
      ticketNs_like?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
      /**
       * 创建用户id
       */
      ticketNs?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
      id_like?: string;
      sequence_like?: string;
      createAt_gte?: Date;
      createAt_lte?: Date;
      plate?: string;
      plate_like?: string;
      crm?: string;
      vin?: string;
      vin_like?: string;
      createBy?: string;
      ticketNs_like?: string;
      num_like?: string;
      batteryNum_like?: string;
      batteryPN_like?: string;
      rdb?: string;
      scrapped?: boolean[];
      brands?: string | string[];
      terminal?: string | string[];
      park?: string | string[];
      status?: ("PENDING" | "PASSED" | "REJECTED") | ("PENDING" | "PASSED" | "REJECTED")[];
      passAt_gte?: Date;
      passAt_lte?: Date;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
  export interface StopVehicleMaintainRequest {
    vehicleId: string;
  }
  export interface StartVehicleMaintainRequest {
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 正面车头图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车外观图片
       */
      appearancePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆行驶证图片
       */
      license?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      [k: string]: any;
    } & {
      /**
       * 车辆的sequence编号
       */
      sequence?: string;
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 车辆录入工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "CREATING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 是否在维保中
       */
      maintaining?: string;
      /**
       * 当前的维保周期
       */
      maintainPeriod?: string;
      /**
       * 当前维保周期结束时间
       */
      maintainPeriodEndAt?: Date;
      /**
       * 新车录入通过的时间
       */
      passAt?: Date;
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
       * 车辆报废备注
       */
      scrappedRemark?: string;
      /**
       * 车辆报废人
       */
      scrappedBy?: string;
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
  export interface SummaryAllRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryAllResponse {
    content?: {
      /**
       * 车辆总数
       */
      vehicle?: number;
      /**
       * 维修单总数
       */
      repair?: number;
      /**
       * 维保单总数
       */
      maintain?: number;
      /**
       * 人员数
       */
      person?: number;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      createBy: string;
      ticketNs: string;
      vehicle: string;
      assignee?: string;
      assignAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
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
      id_like?: string;
      sequence_like?: string;
      status?:
        | ("NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED")
        | ("NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED")[];
      createAt_gte?: Date;
      createAt_lte?: Date;
      assignee?: string;
      vehiclePlate_like?: string;
      crm_like?: string;
      vehicleVin_like?: string;
      ticketNs?: string;
      ticketNs_like?: string;
      vehicleNo_like?: string;
      collaborators?: string;
      participant?: string;
      leaderNs?: string;
      withNoSend?: boolean;
      vehicleBrands?: string | string[];
      vehicleBrands_like?: string;
      vehicleTerminal?: string | string[];
      vehicleTerminal_like?: string;
      vehicleScrapped?: boolean | boolean[];
      backupAbnormal?: boolean | boolean[];
      vehicle?: string;
      vehicleCatl_like?: string;
      vehicleBatteryPN_like?: string;
      vehicleBatteryNum_like?: string;
      maintainExist?: boolean[];
      assignAt_gte?: Date;
      assignAt_lte?: Date;
      passedAt_gte?: Date;
      passedAt_lte?: Date;
      passRemark_like?: string;
      passedBy?: string;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
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
       * 提交时间，需同步至repair中
       */
      submitAt?: Date;
      /**
       * 提交人，需同步至repair中
       */
      submitBy?: string;
      /**
       * 暂停原因，需同步至repair中
       */
      pauseReason?: string;
      /**
       * 故障元件
       */
      faultCells?: string[];
      /**
       * 故障备注
       */
      faultCellsRemark?: string;
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
       * 故障现象
       */
      faultPhenomenon?: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车头正面图片
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 其他图片
       */
      otherPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障部位图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 采集数据文件
       */
      dataFile?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        };
      }[];
      /**
       * 车辆rdb信息
       */
      rdb?: string;
    } & {
      collaborators?: string[];
    };
  }
  export interface UpdateRepairRecordResponse {
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆CATL项目名称
       */
      vehicleCatl?: string;
      /**
       * 关联车辆电池PN
       */
      vehicleBatteryPN?: string;
      /**
       * 关联车辆电池号
       */
      vehicleBatteryNum?: string;
      /**
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
       * 预约上门时间
       */
      orderAt?: Date;
      /**
       * 问题描述
       */
      problem?: string;
      /**
       * 关联维保单id
       */
      maintain?: string;
      /**
       * 关联维保单序号
       */
      maintainSequence?: string;
      /**
       * 派工人员 id
       */
      assignee?: string;
      /**
       * 派送时间
       */
      assignAt?: Date;
      /**
       * 工单关闭时间
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
         * 提交时间，需同步至repair中
         */
        submitAt?: Date;
        /**
         * 提交人，需同步至repair中
         */
        submitBy?: string;
        /**
         * 暂停原因，需同步至repair中
         */
        pauseReason?: string;
        /**
         * 故障元件
         */
        faultCells?: string[];
        /**
         * 故障备注
         */
        faultCellsRemark?: string;
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
         * 故障现象
         */
        faultPhenomenon?: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车头正面图片
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 其他图片
         */
        otherPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障部位图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 采集数据文件
         */
        dataFile?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
            name: string;
            /**
             * oss上的文件名
             */
            ossName: string;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 文件大小
             */
            size?: number;
            /**
             * 上传状态
             */
            status?: string;
            /**
             * uid
             */
            uid: string;
            /**
             * url
             */
            url: string;
          };
        }[];
        /**
         * 车辆rdb信息
         */
        rdb?: string;
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
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 工时计算公式
       */
      workHoursCalc?: string;
      /**
       * 工时
       */
      workHours?: number;
      /**
       * 备件异常
       */
      backupAbnormal?: boolean;
    } & {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
      /**
       * 维修单工单状态，以KANBAN ticket状态为准，该字段只作用于筛选功能
       */
      status?: "NOSEND" | "CREATING" | "REPARING" | "PAUSING" | "REJECTED" | "PENDING" | "PASSED";
      /**
       * 前一次状态修改时间
       */
      perStatusAt?: Date;
      /**
       * 只有在第一次提交时才记录实际出工时长 后续不在纪录 默认为true
       */
      needActualWorkHours?: boolean;
      /**
       * 实际出工时长（小时）
       */
      actualWorkHours?: number;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface SummaryRepairsRankRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
      keyword: string;
    };
  }
  export interface SummaryRepairsRankResponse {
    content?: any[];
  }
  export interface SummaryRepairsFaultByMonthRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
      fault: string;
    };
  }
  export interface SummaryRepairsFaultByMonthResponse {
    content?: any[];
  }
  export interface SummaryRepairsMaintainByMonthRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryRepairsMaintainByMonthResponse {
    content?: any[];
  }
  export interface SummaryRepairsPersonFaultRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
      ticketNs: string;
    };
  }
  export interface SummaryRepairsPersonFaultResponse {
    content?: any[];
  }
  export interface SummaryRepairsPersonEffectRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryRepairsPersonEffectResponse {
    content?: any[];
  }
  export interface SummaryRepairsPersonStateResponse {
    content?: any[];
  }
  export interface CreateMaintainRequest {
    body: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
    };
  }
  export interface CreateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
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
      id_like?: string;
      sequence_like?: string;
      status?:
        | ("CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED")
        | ("CREATING" | "MAINTAINING" | "REPARING" | "PENDING" | "REJECTED" | "PASSED")[];
      createAt_gte?: Date;
      createAt_lte?: Date;
      vehiclePlate_like?: string;
      crm_like?: string;
      vehicleVin_like?: string;
      vehicleVin?: string;
      vehicleNo_like?: string;
      vehicleTerminal_like?: string;
      appearance?: string;
      software?: string;
      participant?: string;
      vehicleBrands?: string | string[];
      vehicleBrands_like?: string;
      vehicleTerminal?: string | string[];
      vehiclePark?: string | string[];
      vehicleScrapped?: boolean | boolean[];
      vehicle?: string;
      prePeriod?: string;
      period?: string;
      preCloseAt_gte?: Date;
      preCloseAt_lte?: Date;
      passedAt_gte?: Date;
      passedAt_lte?: Date;
      vehicleBatteryPropRight?: string;
    };
  }
  export interface ListMaintainsResponse {
    content?: ({
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
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
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
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
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
    };
  }
  export interface UpdateMaintainResponse {
    content?: {
      /**
       * 关联的工单 id
       */
      ticket?: string;
      /**
       * 维修单的sequence编号
       */
      sequence?: string;
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
       * 应维保时间
       */
      maintainAt?: Date;
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
       * 是否存在审核超时，一旦有过超时，便不再修改
       */
      auditTimeout?: boolean;
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
       * 关联车辆电池产权
       */
      vehicleBatteryPropRight?: string;
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
        /**
         * 外观检查组签到地址
         */
        signAddress?: string;
        /**
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 外观诊断组到场时间
         */
        arrivalAt?: Date;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查组实际出工人
         */
        workers?: string[];
        /**
         * 车牌（车头照）
         */
        frontPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 整车铭牌图片
         */
        nameplatePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 车辆仪表图片
         */
        meterPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池号图片
         */
        batteryPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池仓图片
         */
        batteryCompartmentPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 高压盒图片
         */
        hvBoxPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 维保现场图片
         */
        maintenanceSitePic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 故障图片
         */
        faultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-开始图片
         */
        softwareStartPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机故障显示图片
         */
        softwareFaultPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-结束图片
         */
        softwareEndPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
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
         * 签到人
         */
        signBy?: string;
        /**
         * 签到人角色
         */
        signRoles?: string[];
        /**
         * 签到人手机号
         */
        signPhone?: string;
        /**
         * 签到人名字
         */
        signName?: string;
        /**
         * 路线图
         */
        routeMap?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
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
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 上位机软件截图-最后图片
         */
        endPic?: {
          /**
           * 原始文件名
           */
          name: string;
          /**
           * oss上的文件名
           */
          ossName: string;
          /**
           * 备注
           */
          remark?: string;
          /**
           * 文件大小
           */
          size?: number;
          /**
           * 上传状态
           */
          status?: string;
          /**
           * uid
           */
          uid: string;
          /**
           * url
           */
          url: string;
        }[];
        /**
         * 电池PN
         */
        batteryPN?: string;
        /**
         * 电池号
         */
        batteryNum?: string;
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
         * 整车信息-车辆备注
         */
        vehicleRemark?: string;
        /**
         * 外观检查项
         */
        items?: {
          /**
           * 检查结果
           */
          result?: string;
          /**
           * 检查记录
           */
          record?: string;
          /**
           * 检查的key
           */
          key: string;
        }[];
        /**
         * 外观检查项错误
         */
        itemErrors?: {
          /**
           * 检查的key
           */
          key: string;
          /**
           * 错误信息
           */
          message?: string;
        }[];
        /**
         * 是否待审通过
         */
        checkPass?: boolean;
      };
      /**
       * 关联维修单 id
       */
      repair?: string;
      /**
       * 关联维修单 序号
       */
      repairSequence?: string;
      /**
       * 完工时间
       */
      closeAt?: Date;
      /**
       * 维保周期
       */
      period?: string;
      /**
       * 上一个维保周期
       */
      prePeriod?: string;
      /**
       * 维保完成的截止日期
       */
      deadline?: Date;
      /**
       * 上次维保完成日期
       */
      preCloseAt?: Date;
      /**
       * 提交时间
       */
      submitAt?: Date;
      /**
       * 初次提交时间
       */
      firstSubmitAt?: Date;
      /**
       * 提交人
       */
      submitBy?: string;
      /**
       * 审核备注
       */
      passRemark?: string;
      /**
       * 审核通过时间，一般与工单关闭时间相同
       */
      passedAt?: Date;
      /**
       * 审核通过人
       */
      passedBy?: string;
      /**
       * 点检报告URL
       */
      reportUrl?: string;
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
      /**
       * 外观检查组签到地址
       */
      signAddress?: string;
      /**
       * 签到人
       */
      signBy?: string;
      /**
       * 签到人角色
       */
      signRoles?: string[];
      /**
       * 签到人手机号
       */
      signPhone?: string;
      /**
       * 签到人名字
       */
      signName?: string;
      /**
       * 外观诊断组到场时间
       */
      arrivalAt?: Date;
      /**
       * 路线图
       */
      routeMap?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 外观检查组实际出工人
       */
      workers?: string[];
      /**
       * 车牌（车头照）
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池仓图片
       */
      batteryCompartmentPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 高压盒图片
       */
      hvBoxPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 维保现场图片
       */
      maintenanceSitePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 外观检查项
       */
      items?: {
        /**
         * 检查结果
         */
        result?: string;
        /**
         * 检查记录
         */
        record?: string;
        /**
         * 检查的key
         */
        key: string;
      }[];
      /**
       * 外观检查项错误
       */
      itemErrors?: {
        /**
         * 检查的key
         */
        key: string;
        /**
         * 错误信息
         */
        message?: string;
      }[];
      /**
       * 是否待审通过
       */
      checkPass?: boolean;
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
      /**
       * 外观检查组签到地址
       */
      signAddress?: string;
      /**
       * 签到人
       */
      signBy?: string;
      /**
       * 签到人角色
       */
      signRoles?: string[];
      /**
       * 签到人手机号
       */
      signPhone?: string;
      /**
       * 签到人名字
       */
      signName?: string;
      /**
       * 外观诊断组到场时间
       */
      arrivalAt?: Date;
      /**
       * 路线图
       */
      routeMap?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 外观检查组实际出工人
       */
      workers?: string[];
      /**
       * 车牌（车头照）
       */
      frontPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 整车铭牌图片
       */
      nameplatePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 车辆仪表图片
       */
      meterPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池号图片
       */
      batteryPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池仓图片
       */
      batteryCompartmentPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 高压盒图片
       */
      hvBoxPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 维保现场图片
       */
      maintenanceSitePic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 故障图片
       */
      faultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-开始图片
       */
      softwareStartPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机故障显示图片
       */
      softwareFaultPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-结束图片
       */
      softwareEndPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 外观检查项
       */
      items?: {
        /**
         * 检查结果
         */
        result?: string;
        /**
         * 检查记录
         */
        record?: string;
        /**
         * 检查的key
         */
        key: string;
      }[];
      /**
       * 外观检查项错误
       */
      itemErrors?: {
        /**
         * 检查的key
         */
        key: string;
        /**
         * 错误信息
         */
        message?: string;
      }[];
      /**
       * 是否待审通过
       */
      checkPass?: boolean;
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
       * 签到人
       */
      signBy?: string;
      /**
       * 签到人角色
       */
      signRoles?: string[];
      /**
       * 签到人手机号
       */
      signPhone?: string;
      /**
       * 签到人名字
       */
      signName?: string;
      /**
       * 路线图
       */
      routeMap?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-最后图片
       */
      endPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
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
       * 整车信息-车辆备注
       */
      vehicleRemark?: string;
      /**
       * 外观检查项
       */
      items?: {
        /**
         * 检查结果
         */
        result?: string;
        /**
         * 检查记录
         */
        record?: string;
        /**
         * 检查的key
         */
        key: string;
      }[];
      /**
       * 外观检查项错误
       */
      itemErrors?: {
        /**
         * 检查的key
         */
        key: string;
        /**
         * 错误信息
         */
        message?: string;
      }[];
      /**
       * 是否待审通过
       */
      checkPass?: boolean;
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
       * 签到人
       */
      signBy?: string;
      /**
       * 签到人角色
       */
      signRoles?: string[];
      /**
       * 签到人手机号
       */
      signPhone?: string;
      /**
       * 签到人名字
       */
      signName?: string;
      /**
       * 路线图
       */
      routeMap?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
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
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 上位机软件截图-最后图片
       */
      endPic?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 电池PN
       */
      batteryPN?: string;
      /**
       * 电池号
       */
      batteryNum?: string;
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
       * 整车信息-车辆备注
       */
      vehicleRemark?: string;
      /**
       * 外观检查项
       */
      items?: {
        /**
         * 检查结果
         */
        result?: string;
        /**
         * 检查记录
         */
        record?: string;
        /**
         * 检查的key
         */
        key: string;
      }[];
      /**
       * 外观检查项错误
       */
      itemErrors?: {
        /**
         * 检查的key
         */
        key: string;
        /**
         * 错误信息
         */
        message?: string;
      }[];
      /**
       * 是否待审通过
       */
      checkPass?: boolean;
    };
  }
  export interface SummaryMaintainsByMonthRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryMaintainsByMonthResponse {
    content?: any[];
  }
  export interface SummaryMaintainsFaultByMonthRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryMaintainsFaultByMonthResponse {
    content?: any[];
  }
  export interface SummaryMaintainsFaultRankRequest {
    query?: {
      createAt_gte: Date;
      createAt_lte: Date;
    };
  }
  export interface SummaryMaintainsFaultRankResponse {
    content?: any[];
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
      /**
       * 操作者用户名
       */
      username?: string;
      /**
       * 操作者昵称
       */
      nickname?: string;
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
  export interface CreateNotificationRequest {
    body: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    } & {
      title: string;
      content: string;
    };
  }
  export interface CreateNotificationResponse {
    content?: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListNotificationsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      title_like?: string;
      createAt_gte?: string;
      createAt_lte?: string;
    };
  }
  export interface ListNotificationsResponse {
    content?: ({
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
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
  export interface GetNotificationRequest {
    notificationId: string;
  }
  export interface GetNotificationResponse {
    content?: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNotificationRequest {
    notificationId: string;
    /**
     * 通知
     */
    body: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    };
  }
  export interface UpdateNotificationResponse {
    content?: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteNotificationRequest {
    notificationId: string;
  }
  export interface UpdateNotificationReadRequest {
    notificationId: string;
    /**
     * 通知已读用户
     */
    body: {
      /**
       * 用户id
       */
      id: string;
      /**
       * 用户昵称
       */
      nickname: string;
    };
  }
  export interface UpdateNotificationReadResponse {
    content?: {
      /**
       * 标题
       */
      title?: string;
      /**
       * 内容
       */
      content?: string;
      /**
       * 附件
       */
      files?: {
        /**
         * 原始文件名
         */
        name: string;
        /**
         * oss上的文件名
         */
        ossName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 文件大小
         */
        size?: number;
        /**
         * 上传状态
         */
        status?: string;
        /**
         * uid
         */
        uid: string;
        /**
         * url
         */
        url: string;
      }[];
      /**
       * 已读用户数组
       */
      readUsers?: {
        /**
         * 用户id
         */
        id: string;
        /**
         * 用户昵称
         */
        nickname: string;
      }[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
}

export = SDK;
