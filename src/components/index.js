import React from 'react';
import PropTypes from 'prop-types';
import { castArray } from 'lodash';

import defaultTheme from '../themes/default';
import defaultAnimations from '../themes/animations';
import { Ul } from './common';
import defaultDecorators from './Decorators';
import TreeNode from './TreeNode';

const TreeBeard = ({
    animations,
    decorators,
    data,
    onToggle,
    handleCreateFile,
    handleCreateFolder,
    handleDeleteFile,
    handleRename,
    handleMoveTo,
    handleUpload,
    style,
}) => (
    <Ul style={{ ...defaultTheme.tree.base, ...style.tree.base }}>
        {castArray(data).map((node) => (
            <TreeNode
                {...{
                    decorators,
                    node,
                    onToggle,
                    handleCreateFile,
                    handleCreateFolder,
                    handleDeleteFile,
                    handleRename,
                    handleMoveTo,
                    handleUpload,
                    animations,
                }}
                key={node.id}
                style={{ ...defaultTheme.tree.node, ...style.tree.node }}
            />
        ))}
    </Ul>
);

TreeBeard.propTypes = {
    style: PropTypes.object,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    animations: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    onToggle: PropTypes.func,
    handleCreateFile: PropTypes.func,
    handleCreateFolder: PropTypes.func,
    handleDeleteFile: PropTypes.func,
    handleRename: PropTypes.func,
    handleMoveTo: PropTypes.func,
    handleUpload: PropTypes.func,
    decorators: PropTypes.object,
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    animations: defaultAnimations,
    decorators: defaultDecorators,
};

export default TreeBeard;
