export interface Servers {
    config_name: string

    cpu: {
        name: string
        base_freq: number
        count: number
        cores_per_cpu: number
    }

    ram: [
        {
            type: string
            size: number
            count: number
        },
    ]

    disk: [
        {
            type: string
            size: number
            count: number
        },
        (
            | {
                  type: string
                  size: number
                  count: number
              }
            | undefined
        ),
    ]

    gpu: {
        name: string
        count: number
    }

    is_manual_erase: boolean
    is_manual_os_install: boolean

    config: [
        {
            id: number
            count: number
        },
    ]

    is_configurable: boolean
    arch_type: string
    price_plan_available: string[]

    addition: null | any
    primary: null | any
    uuid: string
    name: string
    tariff_line: string
    model: string

    tags: string[] | null
    tag_list: [
        {
            uuid: string
            name: string
            text: string
            is_hide: boolean
            is_filter: boolean
            sort_weight: number
            style_key: string
        },
    ]

    state: string

    available: [
        {
            location: string
            count: number
            plan_count: [
                {
                    plan_uuid: string
                    count: number
                },
            ]
        },
    ]

    setup_fee_collection: {
        [currency: string]: {
            year: null | number
            day: null | number
            month: null | number
            hour: null | number
        }
    }

    price_collection: {
        [currency: string]: {
            year: null | number
            day: null | number
            month: number
            hour: null | number
        }
    }

    location_price_collection: {
        [location: string]: {
            [currency: string]: {
                year: null | number
                day: number
                month: number
                hour: null | number
            }
        }
    }

    service_tag: string
    quantity: number
    eol_date: null | string

    is_primary: boolean
    is_order: boolean
    is_preorder: boolean
    is_single_prolonged: boolean
    is_qchange: boolean
    is_user_discount_enabled: boolean
    is_price_plan_discount_enabled: boolean
}
