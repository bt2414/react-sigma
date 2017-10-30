// @flow

import React from 'react';
import '../sigma/sigma.plugins.dragNodes';

type Props = {
  sigma?: sigma
};

class DragNodes extends React.Component {
  props: Props;

  constructor(props) {
		super(props);
    const s = this.props.sigma;
    const dragListener = new sigma.plugins.dragNodes(s, s.renderers[0]);
    s.refresh();
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.sigma !== nextProps.sigma) {
      const s = nextProps.sigma;
      const dragListener = new sigma.plugins.dragNodes(s, s.renderers[0]);
      s.refresh();
    }
  }
  render = () => null;
}

export default DragNodes;
