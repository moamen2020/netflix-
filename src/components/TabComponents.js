import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import '../css/TabsNav.css'
import TabPrice from './tabs_nav/TabPrice';

// Tab Content
import TabContentOne from './TabContentOne';
import TabContactTow from './TabContactTow';
import TabContentThree from './TabContentThree';


class TabComponents extends Component {

  state= {
    tabIndex : 0
  }

    render() {
        return (
          <div>
            <Tabs className='tabs' selectedIndex={this.state.tabIndex} 
            onSelect={tabIndex => this.setState({tabIndex})}>
              <TabList className='tab-nav-container'>
                <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                  <TabDoor />
                  <p style={{marginTop: '12px'}}>
                    <strong>No commitments <br /> Cancel online at anytime</strong>
                  </p>
                </Tab>
                <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                  <TabDevices />
                  <p style={{marginTop: '-95px'}}>
                    <strong>Watch anywhere</strong>
                  </p>
                </Tab>
                <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                  <TabPrice />
                  <p><strong>Pick your price</strong></p>
                </Tab>
              </TabList>
              {/* Tab Selected */}
              <TabPanel>
                <TabContentOne />
              </TabPanel>
              <TabPanel>
                <TabContactTow />
              </TabPanel>
              <TabPanel>
                <TabContentThree />
              </TabPanel>
            </Tabs>
          </div>
        )
    }
}



export default TabComponents;