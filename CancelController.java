package com.example.demo.controller;

import com.example.demo.entity.Cancel;
import com.example.demo.repository.CancelRepository;
import com.example.demo.repository.StaffRepository;
import com.example.demo.repository.MoldRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLDecoder;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
class CancelController {
    @Autowired private MoldRepository moldRepository;
    @Autowired private StaffRepository staffRepository;
    @Autowired private CancelRepository cancelRepository;


    @GetMapping(path = "/cancel")
    private Collection<Cancel> getCancel(){
        return this.cancelRepository.findAll().stream().collect(Collectors.toList());
    }

    @PostMapping(path = "/Cancel/{stafid}/{meid}")
    private Cancel newcancels(@RequestBody String dataDis,@PathVariable Long staffid, @PathVariable Long meid) throws JsonParseException, IOException {

        final String decoded = URLDecoder.decode(dataDis, "UTF-8");
        dataDis = decoded;
        ObjectMapper mapper = new ObjectMapper();
        JsonNode actualObj = mapper.readTree(dataDis);
        JsonNode jsonNote = actualObj.get("inputNote");


        Cancel cancel = new Cancel();
        cancel.setNote(jsonNote.textValue());
        cancel.setStaff(staffRepository.getOne(staffid));
        cancel.setMold(moldRepository.getOne(meid));

        return cancelRepository.save(cancel);



    }
}
