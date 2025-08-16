import { ROUTE_PATHS } from '@/config/routes/routes'
import { type HeaderConfig } from '@/components/containers/header/types'
import { type NavigationConfig } from '@/components/containers/navbar/types'

const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
    MANAGER: 'manager',
    DEVELOPER: 'developer',
} as const

type RoleValues = (typeof ROLES)[keyof typeof ROLES] | string

export const PERMISSION_BY_ROLE: Record<RoleValues, { name: string; path: string }[]> = {
    [ROLES.USER]: [
        ROUTE_PATHS.SERVERS_ORDER_PRE_BUILT,
        ROUTE_PATHS.SSL,
        ROUTE_PATHS.VOLUMES,
        ROUTE_PATHS.NETWORKS,
        ROUTE_PATHS.FWAAS,
        ROUTE_PATHS.SECURITY_GROUPS,
        ROUTE_PATHS.IMAGES,
        ROUTE_PATHS.BACKUPS,
        ROUTE_PATHS.FILE_STORAGE,
        ROUTE_PATHS.SERVERS_COLOCATION,
        ROUTE_PATHS.SERVERS_RACKS,
        ROUTE_PATHS.SERVERS_NETWORKS,
        ROUTE_PATHS.SERVERS_BACKUP,
        ROUTE_PATHS.SHD_BLOCK_STORAGE_DISKS,
        ROUTE_PATHS.BASIC_FIREWALL,
        ROUTE_PATHS.NETWORK_EQUIPMENT_HOME,
        ROUTE_PATHS.ADDITIONAL_PORTS,
        ROUTE_PATHS.SSH,
        ROUTE_PATHS.DOCS,
        ROUTE_PATHS.GLOBAL_ROUTER,
        ROUTE_PATHS.NETWORK_IPAM,
        ROUTE_PATHS.NETWORK_BLOCKTOOLS_ATTACKS,
        ROUTE_PATHS.NETWORK_ANTIDDOS,
        ROUTE_PATHS.NETWORK_LOAD_BALANCER,
        ROUTE_PATHS.VPC_LICENSES,
        ROUTE_PATHS.QUOTAS,
        ROUTE_PATHS.SECURITY_CERTIFIED_SERVERS,
        ROUTE_PATHS.SECURITY_CERTIFIED_CLOUD,
        ROUTE_PATHS.SECURITY_SERVER_PROTECTION,
        ROUTE_PATHS.WR_DEFAULT_RESOURCES,
        ROUTE_PATHS.DNS_DEFAULT_HOSTING,
        ROUTE_PATHS.CDN,
        ROUTE_PATHS.ML_DEFAULT_ML_PLATFORM,
        ROUTE_PATHS.ML_DEFAULT_INFERENCE_PLATFORM,
    ],
    [ROLES.ADMIN]: [
        ROUTE_PATHS.ADMIN_DASHBOARD,
        ROUTE_PATHS.ADMIN_USERS,
        ROUTE_PATHS.ADMIN_ROLES,
        ROUTE_PATHS.ADMIN_PERMISSIONS,
        ROUTE_PATHS.ADMIN_SETTINGS,
        ROUTE_PATHS.ADMIN_SERVERS,
        ROUTE_PATHS.ADMIN_CLOUD,
        ROUTE_PATHS.ADMIN_NETWORK,
        ROUTE_PATHS.ADMIN_SECURITY,
        ROUTE_PATHS.ADMIN_LOGS,
        ROUTE_PATHS.ADMIN_PERFORMANCE,
        ROUTE_PATHS.ADMIN_REPORTS_USAGE,
        ROUTE_PATHS.ADMIN_REPORTS_FINANCIAL,
    ],
    [ROLES.MANAGER]: [
        ROUTE_PATHS.MANAGER_DASHBOARD,
        ROUTE_PATHS.MANAGER_SERVERS,
        ROUTE_PATHS.MANAGER_CLOUD,
        ROUTE_PATHS.MANAGER_NETWORK,
        ROUTE_PATHS.MANAGER_REPORTS,
        ROUTE_PATHS.MANAGER_REQUESTS,
    ],
    [ROLES.DEVELOPER]: [
        ROUTE_PATHS.DEVELOPER_API,
        ROUTE_PATHS.DEVELOPER_DOCS,
        ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_DEV,
        ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_TEST,
        ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_PROD,
        ROUTE_PATHS.DEVELOPER_DEPLOYMENT,
        ROUTE_PATHS.DEVELOPER_MONITORING,
    ],
    [ROLES.GUEST]: [ROUTE_PATHS.GUEST_HOME, ROUTE_PATHS.GUEST_DOCS, ROUTE_PATHS.GUEST_CONTACT, ROUTE_PATHS.NOT_FOUND],
} as const

export const NAVIGATION_ITEMS: Record<RoleValues, NavigationConfig> = {
    [ROLES.USER]: [
        {
            name: 'Servers and colocation',
            icon: 'dns',
            children: [
                [
                    { name: 'Servers', routeName: ROUTE_PATHS.SERVERS_ORDER_PRE_BUILT.name },
                    { routeName: ROUTE_PATHS.SERVERS_COLOCATION.name, name: 'Colocation' },
                    { routeName: ROUTE_PATHS.SERVERS_RACKS.name, name: 'Server racks' },
                ],
                [
                    { routeName: ROUTE_PATHS.SERVERS_NETWORKS.name, name: 'Network' },
                    { routeName: ROUTE_PATHS.SERVERS_BACKUP.name, name: 'Backup' },
                    {
                        routeName: ROUTE_PATHS.SHD_BLOCK_STORAGE_DISKS.name,
                        name: 'Storage solutions',
                        badge: { text: 'new', variant: 'standard' },
                    },
                    { routeName: ROUTE_PATHS.BASIC_FIREWALL.name, name: 'Basic firewall' },
                    { routeName: ROUTE_PATHS.NETWORK_EQUIPMENT_HOME.name, name: 'Network equipment' },
                    { routeName: ROUTE_PATHS.ADDITIONAL_PORTS.name, name: 'Switch ports rent' },
                ],
                [
                    { routeName: ROUTE_PATHS.SSH.name, name: 'SSH keys' },
                    { routeName: ROUTE_PATHS.DOCS.name, name: 'Api' },
                ],
            ],
        },
        [
            'Cloud services',
            [
                {
                    name: 'Сloud platform',
                    icon: 'cloud',
                    children: [
                        [
                            { routeName: ROUTE_PATHS.SSL.name, name: 'Servers' },
                            { routeName: ROUTE_PATHS.VOLUMES.name, name: 'Volumes' },
                            { routeName: ROUTE_PATHS.NETWORKS.name, name: 'Network' },
                            { routeName: ROUTE_PATHS.FWAAS.name, name: 'Firewalls' },
                            {
                                routeName: ROUTE_PATHS.SECURITY_GROUPS.name,
                                name: 'Security groups',
                                badge: { variant: 'standard', text: 'new' },
                            },
                            { routeName: ROUTE_PATHS.IMAGES.name, name: 'Images' },
                            { routeName: ROUTE_PATHS.BACKUPS.name, name: 'Backups' },
                            { routeName: ROUTE_PATHS.FILE_STORAGE.name, name: 'File storage' },
                        ],
                    ],
                },
            ],
        ],

        [
            'Global network connectivity',
            [
                {
                    name: 'Global router',
                    icon: 'cloud',
                    children: [
                        [
                            { routeName: ROUTE_PATHS.NETWORK_IPAM.name, name: 'IP addresses' },
                            {
                                routeName: ROUTE_PATHS.NETWORK_BLOCKTOOLS_ATTACKS.name,
                                name: 'Network incidents',
                                badge: { text: 'beta', variant: 'purple' },
                            },
                            { routeName: ROUTE_PATHS.NETWORK_ANTIDDOS.name, name: 'Anti DDoS' },
                            { routeName: ROUTE_PATHS.NETWORK_LOAD_BALANCER.name, name: 'Fault-tolerant load balancer' },
                        ],
                    ],
                },
            ],
        ],
        [
            'Security',
            [
                {
                    name: 'Secrets Manager',
                    icon: 'bell',
                    children: [
                        [
                            { routeName: ROUTE_PATHS.VPC_LICENSES.name, name: 'Services' },
                            { routeName: ROUTE_PATHS.QUOTAS.name, name: 'Quotas' },
                        ],
                    ],
                },
            ],
        ],
        [
            'Attestation and certification',
            [
                {
                    name: 'Certified servers',
                    icon: 'cloud',
                    children: [{ routeName: ROUTE_PATHS.SECURITY_CERTIFIED_SERVERS.name, name: 'Certified servers' }],
                },
                { routeName: ROUTE_PATHS.SECURITY_CERTIFIED_CLOUD.name, name: 'Certified cloud', icon: 'dns' },
                { routeName: ROUTE_PATHS.SECURITY_SERVER_PROTECTION.name, name: 'Server security', icon: 'cloud' },
            ],
        ],
        [
            'External network services',
            [
                {
                    routeName: ROUTE_PATHS.WR_DEFAULT_RESOURCES.name,
                    name: 'Web Resources',
                    badge: { text: 'new', variant: 'standard' },
                },
                { routeName: ROUTE_PATHS.DNS_DEFAULT_HOSTING.name, name: 'DNS Hosting' },
                { routeName: ROUTE_PATHS.CDN.name, name: 'CDN' },
            ],
        ],
        [
            'Machine Learning and Artificial Intelligence',
            [
                { routeName: ROUTE_PATHS.ML_DEFAULT_ML_PLATFORM.name, name: 'ML Platform' },
                { routeName: ROUTE_PATHS.ML_DEFAULT_INFERENCE_PLATFORM.name, name: 'Inference Platform' },
            ],
        ],
    ],
    [ROLES.ADMIN]: [
        { routeName: ROUTE_PATHS.ADMIN_DASHBOARD.name, name: 'Dashboard', icon: 'monitor' },
        {
            name: 'Administration',
            icon: 'settings',
            children: [
                [
                    { routeName: ROUTE_PATHS.ADMIN_USERS.name, name: 'Users' },
                    { routeName: ROUTE_PATHS.ADMIN_ROLES.name, name: 'Roles' },
                    { routeName: ROUTE_PATHS.ADMIN_PERMISSIONS.name, name: 'Permissions' },
                    { routeName: ROUTE_PATHS.ADMIN_SETTINGS.name, name: 'System Settings' },
                ],
            ],
        },
        {
            name: 'Service Management',
            icon: 'dns',
            children: [
                [
                    { routeName: ROUTE_PATHS.ADMIN_SERVERS.name, name: 'Servers' },
                    { routeName: ROUTE_PATHS.ADMIN_CLOUD.name, name: 'Cloud Services' },
                    { routeName: ROUTE_PATHS.ADMIN_NETWORK.name, name: 'Network' },
                    { routeName: ROUTE_PATHS.ADMIN_SECURITY.name, name: 'Security' },
                ],
            ],
        },
        {
            name: 'Monitoring',
            icon: 'monitor',
            children: [
                [
                    { routeName: ROUTE_PATHS.ADMIN_LOGS.name, name: 'Logs' },
                    { routeName: ROUTE_PATHS.ADMIN_PERFORMANCE.name, name: 'Performance' },
                ],
            ],
        },
        {
            name: 'Reports',
            icon: 'report',
            children: [
                [
                    { routeName: ROUTE_PATHS.ADMIN_REPORTS_USAGE.name, name: 'Usage Reports' },
                    { routeName: ROUTE_PATHS.ADMIN_REPORTS_FINANCIAL.name, name: 'Financial Reports' },
                ],
            ],
        },
    ],
    [ROLES.MANAGER]: [
        { routeName: ROUTE_PATHS.MANAGER_DASHBOARD.name, name: 'Team Dashboard', icon: 'dashboard' },
        {
            name: 'Team Resources',
            icon: 'group',
            children: [
                [
                    { routeName: ROUTE_PATHS.MANAGER_SERVERS.name, name: 'Servers' },
                    { routeName: ROUTE_PATHS.MANAGER_CLOUD.name, name: 'Cloud Services' },
                    { routeName: ROUTE_PATHS.MANAGER_NETWORK.name, name: 'Network' },
                ],
            ],
        },
        { routeName: ROUTE_PATHS.MANAGER_REPORTS.name, name: 'Usage Reports', icon: 'report' },
        { routeName: ROUTE_PATHS.MANAGER_REQUESTS.name, name: 'Request Management', icon: 'request_page' },
    ],
    [ROLES.DEVELOPER]: [
        { routeName: ROUTE_PATHS.DEVELOPER_API.name, name: 'API Dashboard', icon: 'settings' },
        { routeName: ROUTE_PATHS.DEVELOPER_DOCS.name, name: 'Documentation', icon: 'book' },
        {
            name: 'Environments',
            icon: 'contact',
            children: [
                [
                    { routeName: ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_DEV.name, name: 'Development' },
                    { routeName: ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_TEST.name, name: 'Testing' },
                    { routeName: ROUTE_PATHS.DEVELOPER_ENVIRONMENTS_PROD.name, name: 'Production' },
                ],
            ],
        },
        { routeName: ROUTE_PATHS.DEVELOPER_DEPLOYMENT.name, name: 'Deployment', icon: 'kvm' },
        { routeName: ROUTE_PATHS.DEVELOPER_MONITORING.name, name: 'Monitoring', icon: 'monitor' },
    ],
    [ROLES.GUEST]: [
        { routeName: ROUTE_PATHS.GUEST_HOME.name, name: 'Home', icon: 'home' },
        { routeName: ROUTE_PATHS.GUEST_DOCS.name, name: 'Documentation', icon: 'book' },
        { routeName: ROUTE_PATHS.GUEST_CONTACT.name, name: 'Contact', icon: 'contact' },
    ],
}

export const ACTION_ITEMS: Record<RoleValues, HeaderConfig> = {
    [ROLES.USER]: [{ name: 'balance' }, { name: 'notices' }, { name: 'profile' }],
    [ROLES.ADMIN]: [],
    [ROLES.MANAGER]: [],
    [ROLES.DEVELOPER]: [],
    [ROLES.GUEST]: [],
}
