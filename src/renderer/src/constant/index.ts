import type { ActionItem } from "@renderer/types"

export class ProjectConstant {
  /**
   * 소스 관리 작업 종류 ActionItem
   * @usage '@renderer/screen/SourceManager/index.tsx'
   */
  static OPERATION_CATEGORY = [
    {
      title: "Download",
      value: 'download',
      icon: "HardDriveDownload",
    },
    {
      title: "Update",
      value: 'update',
      icon: "FolderSync",
      disabled: true
    },
  ] as ActionItem[]

  /**
   * 대상 소스 종류 ActionItem
   * @usage '@renderer/screen/SourceManager/index.tsx'
   */
  static SOURCE_CATEGORY = [
    {
      title: "Lambda",
      value: 'lambda',
      icon: "SquareFunction",
    },
    {
      title: "ECS",
      value: 'ecs',
      icon: "Boxes",
      disabled: true
    },
    {
      title: "Framework",
      value: 'framework',
      icon: "LibraryBig",
      disabled: true
    },
    {
      title: "Application",
      value: 'application',
      icon: "AppWindowMac",
      disabled: true
    },
    {
      title: "Studio",
      value: 'studio',
      icon: "WandSparkles",
      disabled: true
    },
  ] as ActionItem[]

  /**
   * 사용 가능 람다 목록
   * @usage '@renderer/screen/SourceManager/Lambda.tsx'
   */
  static LAMBDA_INFO = [
    // ComCommonSelect
    { value: 'CalsComWebCommonSelectData', label: 'CalsComWebCommonSelectData', description: '/ComCommonSelect' },
    { value: 'CalsComWebCheckApproval', label: 'CalsComWebCheckApproval', description: '/ComCommonSelect' },

    // ComCommonSave
    { value: 'CalsComWebCommonSaveData', label: 'CalsComWebCommonSaveData', description: '/ComCommonSave' },
    { value: 'CalsComWebCommonDeleteData', label: 'CalsComWebCommonDeleteData', description: '/ComCommonSave' },

    // ComCommonConstraint
    { value: 'CalsComConstraint', label: 'CalsComConstraint', description: '/ComCommonConstraint' },

    // ComChannel
    { value: 'CalsComWebChannelContentSelect', label: 'CalsComWebChannelContentSelect', description: '/ComChannel' },
    { value: 'CalsComWebChannelRequest', label: 'CalsComWebChannelRequest', description: '/ComChannel' },
    { value: 'CalsComWebChannelSend', label: 'CalsComWebChannelSend', description: '/ComChannel' },
    { value: 'CalsComWebChannelSingleSend', label: 'CalsComWebChannelSingleSend', description: '/ComChannel' },

    // ComChart
    { value: 'CalsComWebChartSelectData', label: 'CalsComWebChartSelectData', description: '/ComChart' },

    // ComExcel
    { value: 'CalsComWebExcelDownload', label: 'CalsComWebExcelDownload', description: '/ComExcel' },
    { value: 'CalsComWebExcelGetMappingInfo', label: 'CalsComWebExcelGetMappingInfo', description: '/ComExcel' },
    { value: 'CalsComWebExcelUpload', label: 'CalsComWebExcelUpload', description: '/ComExcel' },

    // ComInterface
    { value: 'CalsComWebInterfaceRequest', label: 'CalsComWebInterfaceRequest', description: '/ComInterface' },

    // ComLogin
    { value: 'CalsComWebLoginNormalUser', label: 'CalsComWebLoginNormalUser', description: '/ComLogin' },
    { value: 'CalsComWebLoginPasswordChange', label: 'CalsComWebLoginPasswordChange', description: '/ComLogin' },
    { value: 'CalsComWebLoginPasswordInit', label: 'CalsComWebLoginPasswordInit', description: '/ComLogin' },
    { value: 'CalsComWebLoginPreference', label: 'CalsComWebLoginPreference', description: '/ComLogin' },
    { value: 'CalsComWebLoginRequest', label: 'CalsComWebLoginRequest', description: '/ComLogin' },
    { value: 'CalsExternalLogin', label: 'CalsExternalLogin', description: '/ComLogin' },
    { value: 'CalsExternalCognitoLogin', label: 'CalsExternalCognitoLogin', description: '/ComLogin' },

    // ComNotification
    { value: 'CalsComWebNotificationManage', label: 'CalsComWebNotificationManage', description: '/ComNotification' },

    // ComSystemManage
    { value: 'CalsComWebADHistoryLambda', label: 'CalsComWebADHistoryLambda', description: '/ComSystemManage' },
    { value: 'CalsComWebIPGroupManage', label: 'CalsComWebIPGroupManage', description: '/ComSystemManage' },
    { value: 'CalsComWebPasswordPolicyManage', label: 'CalsComWebPasswordPolicyManage', description: '/ComSystemManage' },
    { value: 'CalsComWebSystemManage', label: 'CalsComWebSystemManage', description: '/ComSystemManage' },
    { value: 'CalsComWebRequestAuthExcelDownload', label: 'CalsComWebRequestAuthExcelDownload', description: '/ComSystemManage' },

    // ComWebLog
    { value: 'CalsComWebLogChartSelectData', label: 'CalsComWebLogChartSelectData', description: '/ComWebLog' },

    // ConsoleData
    { value: 'CalsStudioWebCommonManageData', label: 'CalsStudioWebCommonManageData', description: '/ConsoleData' },

    // ConsoleAuth_QScript
    { value: 'CalsConsoleWebAuthAuthorize', label: 'CalsConsoleWebAuthAuthorize', description: '/ConsoleAuth_QScript' },
    { value: 'CalsConsoleWebAuthInitial', label: 'CalsConsoleWebAuthInitial', description: '/ConsoleAuth_QScript' },
    { value: 'CalsConsoleWebAuthRelease', label: 'CalsConsoleWebAuthRelease', description: '/ConsoleAuth_QScript' },

    // ConsoleMeta_Checkin
    { value: 'CalsConsoleWebCheckinRequest', label: 'CalsConsoleWebCheckinRequest', description: '/ConsoleMeta_Checkin' },
    { value: 'CalsConsoleWebMetaGenerate', label: 'CalsConsoleWebMetaGenerate', description: '/ConsoleMeta_Checkin' },

    // ConsolePublish
    { value: 'CalsConsoleWebConfigPublish', label: 'CalsConsoleWebConfigPublish', description: '/ConsolePublish' },

    // CalsExternalApplication
    { value: 'CalsExternalApplicationAPIDeleteData', label: 'CalsExternalApplicationAPIDeleteData', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPIFileManage', label: 'CalsExternalApplicationAPIFileManage', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPIInsertData', label: 'CalsExternalApplicationAPIInsertData', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPISelectData', label: 'CalsExternalApplicationAPISelectData', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPIUpdateData', label: 'CalsExternalApplicationAPIUpdateData', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPIManageUser', label: 'CalsExternalApplicationAPIManageUser', description: '/CalsExternalApplication' },
    { value: 'CalsExternalApplicationAPILogin', label: 'CalsExternalApplicationAPILogin', description: '/CalsExternalApplication' },

    // CalsExternalMeta
    { value: 'CalsExternalMetaAPI', label: 'CalsExternalMetaAPI', description: '/CalsExternalMeta' },

    // invoke
    { value: 'CalsComTriggerLambdaImageResize', label: 'CalsComTriggerLambdaImageResize', description: 'Invoke' },
    { value: 'CalsComTriggerLambdaSaveAuditLog', label: 'CalsComTriggerLambdaSaveAuditLog', description: 'Invoke' },
    { value: 'CalsComTriggerOrchestrationJobManage', label: 'CalsComTriggerOrchestrationJobManage', description: 'Invoke' },
    { value: 'CalsComTriggerSfnJobManage', label: 'CalsComTriggerSfnJobManage', description: 'Invoke' },
    { value: 'CalsComTriggerStfExcelDownload', label: 'CalsComTriggerStfExcelDownload', description: 'Invoke' },
    { value: 'CalsComWebDecryptHistoryLambda', label: 'CalsComWebDecryptHistoryLambda', description: 'Invoke' },
    { value: 'CalsComWebLogQueryTrackingLambda', label: 'CalsComWebLogQueryTrackingLambda', description: 'Invoke' },
    { value: 'CalsConsoleTriggerCheckinRequest', label: 'CalsConsoleTriggerCheckinRequest', description: 'Invoke' },
    { value: 'CalsConsoleTriggerLambdaBatchDeploy', label: 'CalsConsoleTriggerLambdaBatchDeploy', description: 'Invoke' },
    { value: 'CalsConsoleTriggerLambdaOrchestrationDeploy', label: 'CalsConsoleTriggerLambdaOrchestrationDeploy', description: 'Invoke' },
    { value: 'CalsOrchTriggerSfnBOTask', label: 'CalsOrchTriggerSfnBOTask', description: 'Invoke' },
    { value: 'CalsOrchTriggerSfnProcedureTask', label: 'CalsOrchTriggerSfnProcedureTask', description: 'Invoke' },
    { value: 'CalsOrchTriggerSfnRestApiTask', label: 'CalsOrchTriggerSfnRestApiTask', description: 'Invoke' },

    // sns
    { value: 'CalsConsoleTriggerSnsConfigApply', label: 'CalsConsoleTriggerSnsConfigApply', description: 'SNS' },
    { value: 'CalsConsoleTriggerSnsConfigFeedback', label: 'CalsConsoleTriggerSnsConfigFeedback', description: 'SNS' },
    { value: 'CalsConsoleTriggerSnsConfigPublish', label: 'CalsConsoleTriggerSnsConfigPublish', description: 'SNS' },
    { value: 'CalsConsoleTriggerSnsMetaGenerate', label: 'CalsConsoleTriggerSnsMetaGenerate', description: 'SNS' },

    // 특수
    { value: 'CalsSDKOperationLambda', label: 'CalsSDKOperationLambda', description: 'VS Extension' },
    { value: 'CalsVSExtensionLambda', label: 'CalsVSExtensionLambda', description: 'VS Extension' },

    // No description
    { value: 'CalsComRealtimeNotiSend', label: 'CalsComRealtimeNotiSend', description: '' },
    { value: 'CalsComWebAuthenticationManage', label: 'CalsComWebAuthenticationManage', description: '' },
    { value: 'CalsComWebCreateAuthExcel', label: 'CalsComWebCreateAuthExcel', description: '' },
  ]

  /**
   * 람다 다운로드 폼
   * @usage '@renderer/screen/SourceManager/Lambda.tsx'
   */
  static LAMBDA_DOWNLOAD_FORM = {
    VERSION: [
      { label: 'v1', value: 'v1' },
      { label: 'v2', value: 'v2' },
    ],
    INSTALLATION_TYPE: [
      { label: 'All', value: 'all' },
      { label: 'Selected', value: 'selected' },
    ],

  }
}
