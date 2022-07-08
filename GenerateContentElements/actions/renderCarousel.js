/**
 * Render a Carousel element
 * @title Carousel
 * @category RenderElement
 * @author Botpress
 */

const generateElement = async () => {
  //we generate some cards
  const items = [
    {
      title: 'Apple',
      subtitle: 'Apple Computer',
      actions: [
        {
          action: 'Say something',
          title: 'Learn More',
          text:
            'Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services headquartered in Cupertino'
        }
      ]
    },
    {
      title: 'Google',
      subtitle: 'Google',
      actions: [
        {
          action: 'Say something',
          title: 'Learn More',
          text:
            'is an American multinational technology company that focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.'
        }
      ]
    }
  ]

  //We generate the content element
  const payloads = await bp.cms.renderElement(
    'builtin_carousel',
    {
      items: items,
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
