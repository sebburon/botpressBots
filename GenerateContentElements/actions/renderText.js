  /**
   * Render a Text element
   * @title Text
   * @category RenderElement
   * @author Botpress
   */

  const generateElement = async () => {
    //We generate the content element
    const payloads = await bp.cms.renderElement(
      'builtin_text',
      {
        text: 'This is a new text element',
        typing: true
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

  return generateElement()