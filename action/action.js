/**
 * Created by leo on 16-6-28.
 */
export const Editor_Page = 'Editor_Page';
export const Preview_Page = 'Preview_Page';

export const Add_Item = 'Add-Item';
export const Remove_Item = 'Remove_Item';

export function to_Editor_Page(){
    return{
        type: Editor_Page
    }
}

export function to_Preview_Page() {
    return{
        type: Preview_Page
    }
}

export function add_Item(item) {
    return{
        type: Add_Item,
        item
    }
}

export function remove_Item(index) {
    return{
        type: Remove_Item,
        index
    }
}