import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelSearch from "../compoments/ChannelSerch";
import TeamChannelList from "../compoments/TeamChannelList";
import TeamChannelPreview from "../compoments/TeamChannelPreview";

import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const Sidbar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick="">
          <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Chat App</p>
    </div>
  );
};

function ChannelListContainer() {
  return (
    <>
      <Sidbar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(PreviewPrps) => {
            <TeamChannelPreview {...listProps} type="team" />;
          }}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
