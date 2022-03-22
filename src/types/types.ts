// Cards Types
export interface CardsProps {
    title: string,
    subtitle: string,
    icon: any,
    onPress: any,
}

// Data
export interface DataProps {
    id: number,
    expense_title: string,
    expense_category: string,
    expense_value: string,
    expense_owner: string,
    expense_frequency: string,
    date: string,
    icon: string,
    time: string,
}
