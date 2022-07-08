  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   */
  const myAction = async () => {
    var cnt = {
      text: 'Hi, I am built using Botpress.',
      typing: true
    }

    await bp.cms.createOrUpdateContentElement(event.botId, 'builtin_text', cnt, 'builtin_text-OHhiTL','en')
    const payloads = await bp.cms.renderElement('#!builtin_text-OHhiTL', undefined, event)

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

  return myAction()