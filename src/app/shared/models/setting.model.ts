export interface singleSettingOption{
    label:string,
    subLabel:string,
    option:string[],
    default:string,
    isContainEmail:boolean
}
export interface singleSettingObject{
    label:string ,
    subLabel:string,
    highlighted:string,
    [key:string]:singleSettingOption |string
}
export interface settingCategory{
    [key:string]:singleSettingObject 
}
export interface settings{
    [key:string]:settingCategory 
}

