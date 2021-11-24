import React from 'react';
import Title from '../../layout/Typography/Title/Title';

function Info() {
  return (
    <div>
      <Title>Info</Title>
      <p>
        The Hubble Space Telescope is on the road back from its latest glitch, but it's not close to
        the finish line yet.
      </p>
      <p>
        In late October, the famous observatory experienced a problem with the synchronization of
        its internal communications, which knocked all five of its science instruments offline. The
        Hubble team got one of those instruments, the Advanced Camera for Surveys (ACS), back up and
        running on Nov. 7, but the other four remain in a protective "safe mode."
      </p>
      <p>
        Hubble's handlers continue to work to get those four operational as well, and they've made
        some progress recently. For example, during the past week, "the Hubble team has identified
        near-term changes that could be made to how the instruments monitor and respond to missed
        synchronization messages, as well as to how the payload computer monitors the instruments,"
        NASA officials wrote in a Hubble update on Tuesday (Nov. 16).
      </p>
    </div>
  );
}

export default Info;
