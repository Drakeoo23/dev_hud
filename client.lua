local hunger
local thirst

CreateThread(function()
    if Config.Framework == "QBCore" then
      local QBCore = exports['qb-core']:GetCoreObject()
      AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
        while true do
            local msec = 1000;
            local ped = PlayerPedId()
            local PlayerData = QBCore.Functions.GetPlayerData()
            hunger = PlayerData.metadata.hunger
            thirst = PlayerData.metadata.thirst

            SendNUIMessage({
                action = "UpdateHud";
                health = GetEntityHealth(ped) - 100;
                armour = GetPedArmour(ped);
                hunger = hunger;
                thirst = thirst;
            })

            Wait(msec)
        end
      end)
    else
      RegisterNetEvent('esx:playerLoaded', function()
        while true do
          local msec = 1000;
          local ped = PlayerPedId()


          TriggerEvent('esx_status:getStatus', 'hunger', function(status) 
              hunger = status.val / 10000 
          end)
          TriggerEvent('esx_status:getStatus', 'thirst', function(status) 
              thirst = status.val / 10000 
          end)

          SendNUIMessage({
              action = "UpdateHud";
              health = GetEntityHealth(ped) - 100;
              armour = GetPedArmour(ped);
              hunger = hunger;
              thirst = thirst;
          })

          Wait(msec)
        end
      end)
    end
end)

CreateThread(function()
  player = PlayerPedId()
  isPedInAnyVehicle = IsPedInAnyVehicle(player)
  while (true) do
      if (player ~= PlayerPedId()) then 
          player = PlayerPedId()
      end
      if (isPedInAnyVehicle ~= IsPedInAnyVehicle(player)) then 
          isPedInAnyVehicle = IsPedInAnyVehicle(player)
      end
      DisplayRadar(isPedInAnyVehicle)
      Wait(1000)
  end
end)
