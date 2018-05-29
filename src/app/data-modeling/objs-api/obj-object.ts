import {ObjGenVlaues} from "./obj-gen-vlaues";
import {ExtraDescription} from "./extra-description";
import {ObjExtraAffects} from "./obj-extra-affects";

export class ObjObject {
  private vnum: number;
  private name: string;
  private short_desc: string;
  private long_desc: string;
  private sound: string;
  private item_type: string;
  private item_affect: string[];
  private item_wear: string[];
  private obj_gen_values: ObjGenVlaues;
  private obj_weigth: number;
  private obj_value: number;
  private obj_rent_cost: number;
  private extra_affects: ObjExtraAffects[];
  private extra_description: ExtraDescription[];
}
