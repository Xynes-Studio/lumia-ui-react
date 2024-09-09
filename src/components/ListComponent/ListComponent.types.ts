export interface ListComponentProps {
    items: ListItem[];
    type?: 'ordered-list' | 'unordered-List';
}

export interface ListItem {
    text: string;
    level: number;
    children?: ListItem[];
}
