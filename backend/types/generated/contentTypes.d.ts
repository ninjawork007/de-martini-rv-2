import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    first_name: Attribute.String;
    last_name: Attribute.String;
    activation_code: Attribute.String;
    active: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBathLayoutBathLayout extends Schema.CollectionType {
  collectionName: 'bath_layouts';
  info: {
    singularName: 'bath-layout';
    pluralName: 'bath-layouts';
    displayName: 'bath layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    original_created_at: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bath-layout.bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bath-layout.bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBedroomLayoutBedroomLayout extends Schema.CollectionType {
  collectionName: 'bedroom_layouts';
  info: {
    singularName: 'bedroom-layout';
    pluralName: 'bedroom-layouts';
    displayName: 'bedroom layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    original_created_at: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bedroom-layout.bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bedroom-layout.bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    order: Attribute.Integer;
    original_created_at: Attribute.DateTime;
    category_id: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCiSessionCiSession extends Schema.CollectionType {
  collectionName: 'ci_sessions';
  info: {
    singularName: 'ci-session';
    pluralName: 'ci-sessions';
    displayName: 'ci session';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    session_id: Attribute.String;
    ip_address: Attribute.String;
    user_agent: Attribute.String;
    last_activity: Attribute.Integer;
    user_data: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ci-session.ci-session',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ci-session.ci-session',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCockpitOptionCockpitOption extends Schema.CollectionType {
  collectionName: 'cockpit_options';
  info: {
    singularName: 'cockpit-option';
    pluralName: 'cockpit-options';
    displayName: 'cockpit option';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cockpit-option.cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cockpit-option.cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEngineEngine extends Schema.CollectionType {
  collectionName: 'engines';
  info: {
    singularName: 'engine';
    pluralName: 'engines';
    displayName: 'engine';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::engine.engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::engine.engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExteriorEquipmentExteriorEquipment
  extends Schema.CollectionType {
  collectionName: 'exterior_equipments';
  info: {
    singularName: 'exterior-equipment';
    pluralName: 'exterior-equipments';
    displayName: 'exterior equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exterior-equipment.exterior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exterior-equipment.exterior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFloorPlanFloorPlan extends Schema.CollectionType {
  collectionName: 'floor_plans';
  info: {
    singularName: 'floor-plan';
    pluralName: 'floor-plans';
    displayName: 'floor plan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    model: Attribute.String;
    year: Attribute.Integer;
    floor_plan: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::floor-plan.floor-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::floor-plan.floor-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFlooringFlooring extends Schema.CollectionType {
  collectionName: 'floorings';
  info: {
    singularName: 'flooring';
    pluralName: 'floorings';
    displayName: 'flooring';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flooring.flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::flooring.flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: 'forms';
  info: {
    singularName: 'form';
    pluralName: 'forms';
    displayName: 'form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    to_emails: Attribute.Text;
    cc_emails: Attribute.Text;
    send_copy_to_customer: Attribute.Integer;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFormFieldFormField extends Schema.CollectionType {
  collectionName: 'form_fields';
  info: {
    singularName: 'form-field';
    pluralName: 'form-fields';
    displayName: 'form field';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String;
    type: Attribute.String;
    dropdown_options: Attribute.Text;
    form: Attribute.Relation<
      'api::form-field.form-field',
      'oneToOne',
      'api::form.form'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::form-field.form-field',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::form-field.form-field',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFurnitureFurniture extends Schema.CollectionType {
  collectionName: 'furnitures';
  info: {
    singularName: 'furniture';
    pluralName: 'furnitures';
    displayName: 'furniture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::furniture.furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::furniture.furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGroupGroup extends Schema.CollectionType {
  collectionName: 'groups';
  info: {
    singularName: 'group';
    pluralName: 'groups';
    displayName: 'group';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiImageImage extends Schema.CollectionType {
  collectionName: 'images';
  info: {
    singularName: 'image';
    pluralName: 'images';
    displayName: 'image';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    is_front: Attribute.Integer;
    position: Attribute.String;
    description: Attribute.Text;
    public: Attribute.Integer;
    image: Attribute.String;
    group: Attribute.Relation<
      'api::image.image',
      'oneToOne',
      'api::group.group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::image.image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::image.image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInteriorEquipmentInteriorEquipment
  extends Schema.CollectionType {
  collectionName: 'interior_equipments';
  info: {
    singularName: 'interior-equipment';
    pluralName: 'interior-equipments';
    displayName: 'interior equipment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::interior-equipment.interior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::interior-equipment.interior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLanguageKeyLanguageKey extends Schema.CollectionType {
  collectionName: 'language_keys';
  info: {
    singularName: 'language-key';
    pluralName: 'language-keys';
    displayName: 'language key';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Attribute.String;
    filename: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::language-key.language-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::language-key.language-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelSpecificModelSpecific extends Schema.CollectionType {
  collectionName: 'model_specifics';
  info: {
    singularName: 'model-specific';
    pluralName: 'model-specifics';
    displayName: 'model specific';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    year: Attribute.String;
    make: Attribute.String;
    model: Attribute.String;
    manufacture_url: Attribute.String;
    manufacture_list: Attribute.Text;
    generator_make: Attribute.String;
    generator_kw: Attribute.String;
    generator_hours: Attribute.String;
    generator_type: Attribute.String;
    chassis: Attribute.String;
    description: Attribute.Text;
    engine: Attribute.Relation<
      'api::model-specific.model-specific',
      'oneToOne',
      'api::engine.engine'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::model-specific.model-specific',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::model-specific.model-specific',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificBathLayoutModelspecificBathLayout
  extends Schema.CollectionType {
  collectionName: 'modelspecific_bath_layouts';
  info: {
    singularName: 'modelspecific-bath-layout';
    pluralName: 'modelspecific-bath-layouts';
    displayName: 'modelspecific bath layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-bath-layout.modelspecific-bath-layout',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    bath_layout: Attribute.Relation<
      'api::modelspecific-bath-layout.modelspecific-bath-layout',
      'oneToOne',
      'api::bath-layout.bath-layout'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-bath-layout.modelspecific-bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-bath-layout.modelspecific-bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificBedroomLayoutModelspecificBedroomLayout
  extends Schema.CollectionType {
  collectionName: 'modelspecific_bedroom_layouts';
  info: {
    singularName: 'modelspecific-bedroom-layout';
    pluralName: 'modelspecific-bedroom-layouts';
    displayName: 'modelspecific bedroom layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-bedroom-layout.modelspecific-bedroom-layout',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    bedroom_layout: Attribute.Relation<
      'api::modelspecific-bedroom-layout.modelspecific-bedroom-layout',
      'oneToOne',
      'api::bedroom-layout.bedroom-layout'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-bedroom-layout.modelspecific-bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-bedroom-layout.modelspecific-bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificCockpitOptionModelspecificCockpitOption
  extends Schema.CollectionType {
  collectionName: 'modelspecific_cockpit_options';
  info: {
    singularName: 'modelspecific-cockpit-option';
    pluralName: 'modelspecific-cockpit-options';
    displayName: 'modelspecific cockpit option';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-cockpit-option.modelspecific-cockpit-option',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    cockpit_option: Attribute.Relation<
      'api::modelspecific-cockpit-option.modelspecific-cockpit-option',
      'oneToOne',
      'api::cockpit-option.cockpit-option'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-cockpit-option.modelspecific-cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-cockpit-option.modelspecific-cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificEngineModelspecificEngine
  extends Schema.CollectionType {
  collectionName: 'modelspecific_engines';
  info: {
    singularName: 'modelspecific-engine';
    pluralName: 'modelspecific-engines';
    displayName: 'modelspecific engine';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-engine.modelspecific-engine',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    engine: Attribute.Relation<
      'api::modelspecific-engine.modelspecific-engine',
      'oneToOne',
      'api::engine.engine'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-engine.modelspecific-engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-engine.modelspecific-engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificExtEquipmentModelspecificExtEquipment
  extends Schema.CollectionType {
  collectionName: 'modelspecific_ext_equipments';
  info: {
    singularName: 'modelspecific-ext-equipment';
    pluralName: 'modelspecific-ext-equipments';
    displayName: 'modelspecific ext equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-ext-equipment.modelspecific-ext-equipment',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    exterior_equipment: Attribute.Relation<
      'api::modelspecific-ext-equipment.modelspecific-ext-equipment',
      'oneToOne',
      'api::exterior-equipment.exterior-equipment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-ext-equipment.modelspecific-ext-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-ext-equipment.modelspecific-ext-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificFlooringModelspecificFlooring
  extends Schema.CollectionType {
  collectionName: 'modelspecific_floorings';
  info: {
    singularName: 'modelspecific-flooring';
    pluralName: 'modelspecific-floorings';
    displayName: 'modelspecific flooring';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-flooring.modelspecific-flooring',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    flooring: Attribute.Relation<
      'api::modelspecific-flooring.modelspecific-flooring',
      'oneToOne',
      'api::flooring.flooring'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-flooring.modelspecific-flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-flooring.modelspecific-flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificFurnitureModelspecificFurniture
  extends Schema.CollectionType {
  collectionName: 'modelspecific_furnitures';
  info: {
    singularName: 'modelspecific-furniture';
    pluralName: 'modelspecific-furnitures';
    displayName: 'modelspecific furniture';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-furniture.modelspecific-furniture',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    furniture: Attribute.Relation<
      'api::modelspecific-furniture.modelspecific-furniture',
      'oneToOne',
      'api::furniture.furniture'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-furniture.modelspecific-furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-furniture.modelspecific-furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModelspecificIntEquipmentModelspecificIntEquipment
  extends Schema.CollectionType {
  collectionName: 'modelspecific_int_equipments';
  info: {
    singularName: 'modelspecific-int-equipment';
    pluralName: 'modelspecific-int-equipments';
    displayName: 'modelspecific int equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    model_specific: Attribute.Relation<
      'api::modelspecific-int-equipment.modelspecific-int-equipment',
      'oneToOne',
      'api::model-specific.model-specific'
    >;
    interior_equipment: Attribute.Relation<
      'api::modelspecific-int-equipment.modelspecific-int-equipment',
      'oneToOne',
      'api::interior-equipment.interior-equipment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modelspecific-int-equipment.modelspecific-int-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::modelspecific-int-equipment.modelspecific-int-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    active: Attribute.Integer;
    option: Attribute.Integer;
    image: Attribute.String;
    category: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSlideSlide extends Schema.CollectionType {
  collectionName: 'slides';
  info: {
    singularName: 'slide';
    pluralName: 'slides';
    displayName: 'slide';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::slide.slide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::slide.slide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusStatus extends Schema.CollectionType {
  collectionName: 'statuses';
  info: {
    singularName: 'status';
    pluralName: 'statuses';
    displayName: 'status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    public: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status.status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status.status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    testimonial: Attribute.Text;
    display_date: Attribute.DateTime;
    citation: Attribute.String;
    location: Attribute.String;
    active: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUsersGroupUsersGroup extends Schema.CollectionType {
  collectionName: 'users_groups';
  info: {
    singularName: 'users-group';
    pluralName: 'users-groups';
    displayName: 'users group';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'api::users-group.users-group',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    group: Attribute.Relation<
      'api::users-group.users-group',
      'oneToOne',
      'api::group.group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::users-group.users-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::users-group.users-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleVehicle extends Schema.CollectionType {
  collectionName: 'vehicles';
  info: {
    singularName: 'vehicle';
    pluralName: 'vehicles';
    displayName: 'vehicle';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::category.category'
    >;
    vehicle_condition: Attribute.String;
    status: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::status.status'
    >;
    template_id: Attribute.Integer;
    asking_price: Attribute.Decimal;
    sale_price: Attribute.Decimal;
    web_special: Attribute.Integer;
    featured_special: Attribute.Integer;
    clearance: Attribute.Integer;
    year: Attribute.String;
    make: Attribute.String;
    model: Attribute.String;
    series: Attribute.String;
    item_number: Attribute.String;
    vin: Attribute.String;
    mileage: Attribute.String;
    length: Attribute.Integer;
    description: Attribute.Text;
    short_description: Attribute.String;
    engine: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::engine.engine'
    >;
    fuel_type: Attribute.String;
    generator_make: Attribute.String;
    generator_kw: Attribute.String;
    generator_hours: Attribute.String;
    generator_type: Attribute.String;
    hide_generator_hours: Attribute.Integer;
    chassis: Attribute.String;
    map_price: Attribute.Integer;
    model_number: Attribute.String;
    transmission: Attribute.String;
    title: Attribute.String;
    video_embed: Attribute.Text;
    tagline: Attribute.String;
    warranty_title: Attribute.String;
    warranty_description: Attribute.Text;
    drivetrain: Attribute.String;
    style: Attribute.String;
    interior_color: Attribute.String;
    exterior_color: Attribute.String;
    cockpit_option: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::cockpit-option.cockpit-option'
    >;
    bedroom_layout: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::bedroom-layout.bedroom-layout'
    >;
    furniture: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::furniture.furniture'
    >;
    flooring: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::flooring.flooring'
    >;
    slide: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'api::slide.slide'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle.vehicle',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleBathLayoutVehicleBathLayout
  extends Schema.CollectionType {
  collectionName: 'vehicle_bath_layouts';
  info: {
    singularName: 'vehicle-bath-layout';
    pluralName: 'vehicle-bath-layouts';
    displayName: 'vehicle bath layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bath_layout: Attribute.Relation<
      'api::vehicle-bath-layout.vehicle-bath-layout',
      'oneToOne',
      'api::bath-layout.bath-layout'
    >;
    vehicle: Attribute.Relation<
      'api::vehicle-bath-layout.vehicle-bath-layout',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-bath-layout.vehicle-bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-bath-layout.vehicle-bath-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleBedroomLayoutVehicleBedroomLayout
  extends Schema.CollectionType {
  collectionName: 'vehicle_bedroom_layouts';
  info: {
    singularName: 'vehicle-bedroom-layout';
    pluralName: 'vehicle-bedroom-layouts';
    displayName: 'vehicle bedroom layout';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-bedroom-layout.vehicle-bedroom-layout',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    bedroom_layout: Attribute.Relation<
      'api::vehicle-bedroom-layout.vehicle-bedroom-layout',
      'oneToOne',
      'api::bedroom-layout.bedroom-layout'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-bedroom-layout.vehicle-bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-bedroom-layout.vehicle-bedroom-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleCockpitOptionVehicleCockpitOption
  extends Schema.CollectionType {
  collectionName: 'vehicle_cockpit_options';
  info: {
    singularName: 'vehicle-cockpit-option';
    pluralName: 'vehicle-cockpit-options';
    displayName: 'vehicle cockpit option';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-cockpit-option.vehicle-cockpit-option',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    cockpit_option: Attribute.Relation<
      'api::vehicle-cockpit-option.vehicle-cockpit-option',
      'oneToOne',
      'api::cockpit-option.cockpit-option'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-cockpit-option.vehicle-cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-cockpit-option.vehicle-cockpit-option',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleEngineVehicleEngine extends Schema.CollectionType {
  collectionName: 'vehicle_engines';
  info: {
    singularName: 'vehicle-engine';
    pluralName: 'vehicle-engines';
    displayName: 'vehicle engine';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-engine.vehicle-engine',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    engine: Attribute.Relation<
      'api::vehicle-engine.vehicle-engine',
      'oneToOne',
      'api::engine.engine'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-engine.vehicle-engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-engine.vehicle-engine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleExteriorEquipmentVehicleExteriorEquipment
  extends Schema.CollectionType {
  collectionName: 'vehicle_exterior_equipments';
  info: {
    singularName: 'vehicle-exterior-equipment';
    pluralName: 'vehicle-exterior-equipments';
    displayName: 'vehicle exterior equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-exterior-equipment.vehicle-exterior-equipment',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    exterior_equipment: Attribute.Relation<
      'api::vehicle-exterior-equipment.vehicle-exterior-equipment',
      'oneToOne',
      'api::exterior-equipment.exterior-equipment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-exterior-equipment.vehicle-exterior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-exterior-equipment.vehicle-exterior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleFlooringVehicleFlooring
  extends Schema.CollectionType {
  collectionName: 'vehicle_floorings';
  info: {
    singularName: 'vehicle-flooring';
    pluralName: 'vehicle-floorings';
    displayName: 'vehicle flooring';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-flooring.vehicle-flooring',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    flooring: Attribute.Relation<
      'api::vehicle-flooring.vehicle-flooring',
      'oneToOne',
      'api::flooring.flooring'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-flooring.vehicle-flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-flooring.vehicle-flooring',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleFurnitureVehicleFurniture
  extends Schema.CollectionType {
  collectionName: 'vehicle_furnitures';
  info: {
    singularName: 'vehicle-furniture';
    pluralName: 'vehicle-furnitures';
    displayName: 'vehicle furniture';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-furniture.vehicle-furniture',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    furniture: Attribute.Relation<
      'api::vehicle-furniture.vehicle-furniture',
      'oneToOne',
      'api::furniture.furniture'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-furniture.vehicle-furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-furniture.vehicle-furniture',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleImageVehicleImage extends Schema.CollectionType {
  collectionName: 'vehicle_images';
  info: {
    singularName: 'vehicle-image';
    pluralName: 'vehicle-images';
    displayName: 'vehicle image';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-image.vehicle-image',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    image: Attribute.Relation<
      'api::vehicle-image.vehicle-image',
      'oneToOne',
      'api::image.image'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-image.vehicle-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-image.vehicle-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleInteriorEquipmentVehicleInteriorEquipment
  extends Schema.CollectionType {
  collectionName: 'vehicle_interior_equipments';
  info: {
    singularName: 'vehicle-interior-equipment';
    pluralName: 'vehicle-interior-equipments';
    displayName: 'vehicle interior equipment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-interior-equipment.vehicle-interior-equipment',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    interior_equipment: Attribute.Relation<
      'api::vehicle-interior-equipment.vehicle-interior-equipment',
      'oneToOne',
      'api::interior-equipment.interior-equipment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-interior-equipment.vehicle-interior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-interior-equipment.vehicle-interior-equipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleTemplateVehicleTemplate
  extends Schema.CollectionType {
  collectionName: 'vehicle_templates';
  info: {
    singularName: 'vehicle-template';
    pluralName: 'vehicle-templates';
    displayName: 'vehicle template';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-template.vehicle-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-template.vehicle-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleUploadVehicleUpload extends Schema.CollectionType {
  collectionName: 'vehicle_uploads';
  info: {
    singularName: 'vehicle-upload';
    pluralName: 'vehicle-uploads';
    displayName: 'vehicle upload';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vehicle: Attribute.Relation<
      'api::vehicle-upload.vehicle-upload',
      'oneToOne',
      'api::vehicle.vehicle'
    >;
    upload_id: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-upload.vehicle-upload',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-upload.vehicle-upload',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::bath-layout.bath-layout': ApiBathLayoutBathLayout;
      'api::bedroom-layout.bedroom-layout': ApiBedroomLayoutBedroomLayout;
      'api::category.category': ApiCategoryCategory;
      'api::ci-session.ci-session': ApiCiSessionCiSession;
      'api::cockpit-option.cockpit-option': ApiCockpitOptionCockpitOption;
      'api::engine.engine': ApiEngineEngine;
      'api::exterior-equipment.exterior-equipment': ApiExteriorEquipmentExteriorEquipment;
      'api::floor-plan.floor-plan': ApiFloorPlanFloorPlan;
      'api::flooring.flooring': ApiFlooringFlooring;
      'api::form.form': ApiFormForm;
      'api::form-field.form-field': ApiFormFieldFormField;
      'api::furniture.furniture': ApiFurnitureFurniture;
      'api::group.group': ApiGroupGroup;
      'api::image.image': ApiImageImage;
      'api::interior-equipment.interior-equipment': ApiInteriorEquipmentInteriorEquipment;
      'api::language-key.language-key': ApiLanguageKeyLanguageKey;
      'api::model-specific.model-specific': ApiModelSpecificModelSpecific;
      'api::modelspecific-bath-layout.modelspecific-bath-layout': ApiModelspecificBathLayoutModelspecificBathLayout;
      'api::modelspecific-bedroom-layout.modelspecific-bedroom-layout': ApiModelspecificBedroomLayoutModelspecificBedroomLayout;
      'api::modelspecific-cockpit-option.modelspecific-cockpit-option': ApiModelspecificCockpitOptionModelspecificCockpitOption;
      'api::modelspecific-engine.modelspecific-engine': ApiModelspecificEngineModelspecificEngine;
      'api::modelspecific-ext-equipment.modelspecific-ext-equipment': ApiModelspecificExtEquipmentModelspecificExtEquipment;
      'api::modelspecific-flooring.modelspecific-flooring': ApiModelspecificFlooringModelspecificFlooring;
      'api::modelspecific-furniture.modelspecific-furniture': ApiModelspecificFurnitureModelspecificFurniture;
      'api::modelspecific-int-equipment.modelspecific-int-equipment': ApiModelspecificIntEquipmentModelspecificIntEquipment;
      'api::product.product': ApiProductProduct;
      'api::slide.slide': ApiSlideSlide;
      'api::status.status': ApiStatusStatus;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::users-group.users-group': ApiUsersGroupUsersGroup;
      'api::vehicle.vehicle': ApiVehicleVehicle;
      'api::vehicle-bath-layout.vehicle-bath-layout': ApiVehicleBathLayoutVehicleBathLayout;
      'api::vehicle-bedroom-layout.vehicle-bedroom-layout': ApiVehicleBedroomLayoutVehicleBedroomLayout;
      'api::vehicle-cockpit-option.vehicle-cockpit-option': ApiVehicleCockpitOptionVehicleCockpitOption;
      'api::vehicle-engine.vehicle-engine': ApiVehicleEngineVehicleEngine;
      'api::vehicle-exterior-equipment.vehicle-exterior-equipment': ApiVehicleExteriorEquipmentVehicleExteriorEquipment;
      'api::vehicle-flooring.vehicle-flooring': ApiVehicleFlooringVehicleFlooring;
      'api::vehicle-furniture.vehicle-furniture': ApiVehicleFurnitureVehicleFurniture;
      'api::vehicle-image.vehicle-image': ApiVehicleImageVehicleImage;
      'api::vehicle-interior-equipment.vehicle-interior-equipment': ApiVehicleInteriorEquipmentVehicleInteriorEquipment;
      'api::vehicle-template.vehicle-template': ApiVehicleTemplateVehicleTemplate;
      'api::vehicle-upload.vehicle-upload': ApiVehicleUploadVehicleUpload;
    }
  }
}
