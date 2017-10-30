// @flow

import React from 'react';
import '../sigma/plugins.relativeSize';

type Props = {
  initialSize: number,
  sigma?: sigma
};

/**

RelativeSize component, interface for RelativeSize sigma plugin.
It supposes that sigma graph is already in place, therefore component should not be
mounted until graph is available. It can be used within Sigma component if graph is
preloaded, or within loader component, like NeoCypher.

Sets nodes sizes corresponding its degree.

 @param {number} initialSize  start size for every node, will be multiplied by Math.sqrt(node.degree)

**/

class RelativeSize extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    sigma.plugins.relativeSize(this.props.sigma, this.props.initialSize);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sigma !== nextProps.sigma) {
      sigma.plugins.relativeSize(nextProps.sigma, nextProps.initialSize);
    }
  }

  render = () => null;
}

export default RelativeSize;
