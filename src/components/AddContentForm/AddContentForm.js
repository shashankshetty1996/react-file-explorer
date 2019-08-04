import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Tabs from '../Tabs/Tabs';

import CONSTANTS from '../../Constants';

import { initialState, ContentReducer } from './AddContentForm.Reducer.hook';
import { capitalization } from '../../utils/utils';

import './AddContentForm.scss';

const AddContentForm = props => {
  const { onCreate, className } = props;
  const {
    CONTENT_TYPE: {
      TYPE: { FILE, FOLDER },
      ACTION: { SET_TYPE, SET_INPUT },
    },
  } = CONSTANTS;

  const containerClass = cx(['add-content-form', `${className}`]);

  const [controller, dispatchController] = useReducer(ContentReducer, initialState);

  const tabs = [FILE, FOLDER];
  const defaultSelectedTab = controller.tabState;

  const inputField = Object.keys(controller.input);

  const inputHandler = event => {
    const { name, value } = event.target;

    dispatchController({
      type: SET_INPUT,
      payload: { name, value },
    });
  };

  const tabChanged = value => dispatchController({ type: SET_TYPE, payload: value });

  const createContent = event => {
    event.preventDefault();
    const { tabState, input } = controller;
    const isDirectory = tabState === FOLDER;
    onCreate({ ...input, isDirectory });
  };

  return (
    <div className={containerClass}>
      <div className="center">
        <Tabs
          className="type-tab"
          tabs={tabs}
          defaultSelected={defaultSelectedTab}
          onTabClick={value => tabChanged(value)}
        />
      </div>
      <div className="form">
        <form>
          {inputField.map((name, index) => {
            const value = controller.input[name];
            const placeholder = capitalization(name);
            return (
              <Input
                type="text"
                className="form-input"
                name={name}
                value={value}
                onChange={inputHandler}
                placeholder={placeholder}
                key={index}
              />
            );
          })}
          <Button className="form-submit" type="submit" onClick={createContent}>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

AddContentForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  className: PropTypes.string,
};

AddContentForm.defaultProps = {
  className: '',
};

export default AddContentForm;
