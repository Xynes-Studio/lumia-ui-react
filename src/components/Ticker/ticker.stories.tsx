import { Flex, Image } from '@app/View';
import type { Meta, StoryObj } from '@storybook/react';
import { Ticker } from './ticker';
import { H1 } from '@texts/index';

// Define meta information for the Link component
const meta: Meta = {
  title: 'Component/Ticker',
  component: Ticker,
  tags: ["autodocs"],
} satisfies Meta<typeof Ticker>;
export default meta;

// Define the story type
type TickerStory = StoryObj<typeof meta>;

// Stories with args
export const DefaultTicker: TickerStory = {
  args: {
    children:<><H1>Hello</H1><H1>LumiaUI</H1> <H1>Users</H1></>
  },
};


export const TickerWithChildren: TickerStory={
    
  args: {
    
    children: <Flex ><Image style={{
        width: "100%",
      }} source='https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Title'/>
      
      </Flex>,
      stopOnHover:true
  },
}
