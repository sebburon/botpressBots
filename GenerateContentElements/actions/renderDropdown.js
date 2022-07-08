  /**
   * Render a Dropdown element
   * @title Dropdown
   * @category RenderElement
   * @author Botpress
   */
  const axios = require('axios')

  const dropdownConfig = {
    EN: {
      message: 'Please select a country',
      buttonText: 'Continue'
    },
    JA: {
      message: '国を選択してください',
      buttonText: '継続する'
    }
  }

  const dynamicSingleChoice = async () => {
    //We get the options from our internal API
    // here I will simply hardcode some data
    const choices = [
      { label: 'Canada', value: 'canada' },
      { label: 'USA', value: 'usa' },
      { label: 'China', value: 'china' },
      { label: 'Brasil', value: 'brasil' }
    ]

    //We generate the content element
    const payloads = await bp.cms.renderElement(
      'dropdown',
      {
        message: dropdownConfig[user.language.toUpperCase()]
          ? dropdownConfig[user.language.toUpperCase()].message
          : dropdownConfig['EN'].message,
        buttonText: dropdownConfig[user.language.toUpperCase()]
          ? dropdownConfig[user.language.toUpperCase()].buttonText
          : dropdownConfig['EN'].buttonText,
        options: choices
      },
      event
    )
    //We send the generated content elemebnt to the user
    bp.events.replyToEvent(
      {
        botId: event.botId,
        channel: event.channel,
        target: event.target,
        threadId: event.threadId
      },
      payloads,
      event.id
    )
  }

  return dynamicSingleChoice()