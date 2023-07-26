const amqp = require('amqplib')

async function init() {
  try {
    const conn = await amqp.connect("amqp://guest:guest@15672-ersalomo-messagebroker-sljcwlmddfn.ws-us102.gitpod.io:5672/");

    const channel = await conn.createChannel()

    const queue = "belajar"
    const message = "Welcome to the jungle :]"

    await channel.assertQueue(queue, {
      durable: true
    });

    await channel.sendToQueue(queue, Buffer.from(message))
    console.log("sent")

    setTimeout(() => {
      conn.close()
    }, 1000);
    // channel.consume(queue, function(msg){
      //   console.log(`ini pesan dari ${queue}: pesan "${msg.content.toString()}"`)
      // },{noAck:true})
    } catch (error) {
      console.log(`error ${error}`)
    }
  }
    init()