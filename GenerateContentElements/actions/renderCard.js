/**
 * Render a Card element
 * @title Card
 * @category RenderElement
 * @author Botpress
 */

const dynamicSingleChoice = async () => {
  //we can create card buttons
  const buttons = [
    {
      url: 'https://google.com',
      title: 'google',
      action: 'Open URL'
    },
    {
      url: 'https://apple.com',
      title: 'apple',
      action: 'Open URL'
    },
    {
      url: 'https://microsoft.com',
      title: 'microsoft',
      action: 'Open URL'
    }
  ]

  //We generate the content element
  const payloads = await bp.cms.renderElement(
    'builtin_card',
    {
      picture: '',
      title: 'Some links',
      subtitle: 'here are some links',
      actions: buttons
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
