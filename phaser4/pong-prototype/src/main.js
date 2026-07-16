/*# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    index.ts                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: pberset <pberset@student.42lausanne.ch>    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2026/07/15 18:35:59 by pberset           #+#    #+#              #
#    Updated: 2026/07/15 18:36:02 by pberset          ###   Lausanne.ch        #
#                                                                              #
# **************************************************************************** #*/

import * as Phaser from "../../node_modules/phaser/dist/phaser.js";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let paddle1;
let paddle2;

function preload ()
{
    game.load.image('paddle', 'assets/player-bar.png');
}

function create ()
{
    paddle1 = create_paddle(0, game.world.centerY);
}

function update ()
{
}

function create_paddle (x, y)
{
    let paddle = game.add.sprite(x, y, 'paddle');

    paddle.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(paddle);
    paddle.body.collideWorldBounds = true;
    return paddle;
}
