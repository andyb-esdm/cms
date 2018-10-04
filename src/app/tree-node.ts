export interface TreeNode {
    id: number | string;
    parent: number | string;
    description: string;
    children: TreeNode[];
    collapsed: boolean;
}
