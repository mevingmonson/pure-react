import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FileIcon from './FileIcon'
import CommitMessage from './CommitMessage'


const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <FileIcon file={file} />
        <td className="file-name">{file.name}</td>
        <CommitMessage commit={file.latestCommit} />
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};





export default FileListItem
