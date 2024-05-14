import { Flex, Image } from '@app/View';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialouge } from './dialouge';

// Define meta information for the Link component
const meta: Meta = {
  title: 'Component/Dialouge',
  component: Dialouge,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialouge>;
export default meta;

// Define the story type
type DialougeStory = StoryObj<typeof meta>;

// Stories with args
export const DefaultDialouge: DialougeStory = {
  args: {
    visible: true,
    title:'Title',
    description:'Description Goes here'
  },
};


export const DialougeWithChildren: DialougeStory={
    
  args: {
    visible: true,
    title:"An Image",
    children: <Flex ><Image style={{
        width: "100%",
      }} source='https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Title'/>
      
      </Flex>,
    closeIcon:true,
    actionBtnType:'secondary',
    actionBtnAlign:'right'
  },
}
